import React, { Component } from 'react';
import firebase from './firebase';
// external libraries
import SimpleReactValidator from 'simple-react-validator';
import ScrollToTop from 'react-scroll-up';
// components
import Form from './components/Form';
import StudentDisplay from './components/StudentDisplay';
import DropDownCohort from './components/DropDownCohort';
import AlphaButton from './components/AlphaButton';
// stylesheet
import './App.css';

class App extends Component {
	//************CREATING STATE DATA*********************/
	constructor() {
		super();
		this.state = {
			studentCards: [],
			filteredCards: [],
			alphaSortedCards: [],
			firstName: '', // user inputs
			lastName: '',
			cohort: 0,
			website: '',
			github: '',
			linkedIn: '',
			funFact: '',
			selectedDropDown: 'reset', // for cohort dropdown menu
			isToggled: false, // to toggle form on and off screen
			isAlpha: false, // to toggle alphabetize button
			formComplete: false,
		};
		// form validator messages if there are errors on particlar inputs
		this.validator = new SimpleReactValidator({
			autoForceUpdate: this,
			messages: {
				required: "Aw! Don't leave this field empty!",
				alpha_num: "You sure that's a LinkedIn profile?",
				alpha_num_dash: "This doesn't look like a Github name",
			},
		});
	}

	//***********UPDATING STATE*************************//
	componentDidMount() {
		// call on firebase's database
		const dbRef = firebase.database().ref();

		// on any change of the database, push the data into a state array
		dbRef.on('value', (response) => {
			// creating new array to hold the data
			const newState = [];
			// creating a variable for the array of objects (student form responses)
			const data = response.val();

			// on firebase change, push data into newState array
			for (const key in data) {
				newState.push({
					key: key,
					firstName: data[key].firstName,
					lastName: data[key].lastName,
					cohort: data[key].cohort,
					website: data[key].website,
					github: data[key].github,
					linkedIn: data[key].linkedIn,
					funFact: data[key].funFact,
				});
			}

			// setting the new array of data from firebase into our original state array, which we can manipulate for display
			// set alphaSortedCards is also added here at start, just in case user clicks on the alpha button before the cohort
			this.setState({
				studentCards: newState,
				filteredCards: newState,
				alphaSortedCards: [...newState].sort(this.alphabetizeStudents),
			});
		});
	}

	//********EVENT HANDLER FUNCTION TO UPDATE FORM.JS MULTIPLE INPUTS' STATE VALUES *****************************//
	handleChange = (event) => {
		const value = event.target.value;
		this.setState({
			// goes through all the form states and sets the values -- shortcut with help from https://www.pluralsight.com
			...this.state,
			[event.target.name]: value,
		});
	};

	//**********EVENT LISTENER FOR FORM SUBMIT -- compiles all info on form submit and pushes to firebase*********/
	handleSubmit = (event) => {
		event.preventDefault();

		if (this.validator.allValid()) {
			alert('Sweet! Welcome to the directory!');
			// open portal to Firebase
			const dbRef = firebase.database().ref();

			// gather values from all the inputs into an object and
			// push new student object to Firebase
			dbRef.push({
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				cohort: this.state.cohort,
				website: this.state.website,
				github: this.state.github,
				linkedIn: this.state.linkedIn,
				funFact: this.state.funFact,
			});

			// resets the form
			this.setState({
				firstName: '',
				lastName: '',
				cohort: 0,
				website: '',
				github: '',
				linkedIn: '',
				funFact: '',
				formComplete: '',
				isToggled: '',
				selectedDropDown: '',
			});
			document.getElementById('mainForm').reset();
		} else {
			// show validator npm messages
			this.validator.showMessages();
		}
	};

	//***********EVENT HANDLER FOR COHORT NUMBER SUBMIT******* */
	handleCohortSubmit = (event) => {
		event.preventDefault();

		// grab the state of the dropdown option selected
		this.setState(
			{
				selectedDropDown: event.target.value,
			},
			// once the state is set, then do a callback funtion to setCardState function below (code courtesy Chris Harris, developer)
			() => {
				this.setCardState();
			}
		);
	};

	// to set the filteredCard set and alphabetically sorted cards set for render
	setCardState = () => {
		// copy of the returned array from firebase
		const copyOfStudentCards = [...this.state.studentCards];
		// creating a filteredCards array to manipulate and display
		const filteredCards = copyOfStudentCards.filter((student) => {
			if (this.state.selectedDropDown === 'reset') {
				return true; // if no cohort is chosen from the drop-down menu, return all the students
			} else if (student.cohort === this.state.selectedDropDown) {
				return true; // if student cohort property matches the current dropdown, then return everything in this filter
			} else {
				return false; // if any other possible mistake, return false
			}
		});
		// take a copy of the filteredCards array and sort alphabetically
		const alphaSortedCards = [...filteredCards].sort(this.alphabetizeStudents);
		// set the filteredCards and alphaSortedCards array based on what was returned by the filter conditionals above
		this.setState({
			filteredCards,
			alphaSortedCards,
		});
	};

	//***********EVENT HANDLER ON ALPHABETIZE BUTTON TO ALPHABETIZE ARRAY */
	handleAlphaSubmit = (event) => {
		//changes the alpha button's boolean state -- a trigger to determine if something should be alphabetized
		this.setState({
			isAlpha: !this.state.isAlpha,
		});
	};

	//*********EVENT HANDLER ON BUTTON TO SHOW FORM***********/
	toggleForm = () => {
		this.setState({
			isToggled: !this.state.isToggled,
			formComplete: false,
		});
	};

	//****** COMPARE FUNCTION USED TO SORT ARRAY ALPHABETICALLY****/
	alphabetizeStudents = (a, b) => {
		// Using toUpperCase() to ignore character casing, just in case it was entered
		const nameA = a.firstName.toUpperCase();
		const nameB = b.firstName.toUpperCase();

		// set comparison number -- this code from sitepoint.com and multiple stackoverflow sources
		let comparison = 0;
		if (nameA > nameB) {
			comparison = 1;
		} else if (nameA < nameB) {
			comparison = -1;
		}
		return comparison;
	};

	//**********RENDERING THE PAGE**********************/
	render() {
		//to prepare the correct cards to display, saving the filtered cards in a variable
		let displayCards = this.state.filteredCards;
		// if the Alphabetize button is triggered, then the cards to display will be the alphabetized set
		if (this.state.isAlpha === true) {
			displayCards = this.state.alphaSortedCards;
		}
		// ****** RETURN *******
		return (
			<div className='App'>
				<header className='wrapper'>
					<div className='headerContainer'>
						<h1>
							<span className='junoType'>Juno College</span>Grad Directory
						</h1>
						<h2><i className='fas fa-terminal'></i>A collection of front-end development bootcamp survivors</h2>
						<div className='headerButtons'>
							{/* This will trigger the form to open */}
							<button onClick={this.toggleForm}>Add me!</button>
							<a href='#main'>
								<button>Just browsin'</button>
							</a>	
						</div>
					</div>
				</header>
				{/********FORM SECTION - TO INPUT STUDENT CARDS ***************/}
				<section className='wrapper'>
					<div className='formToFill'>
						{/* to show the form only if the button is toggled and the form is not complete */}
						{this.state.isToggled && !this.state.formComplete && (
							<Form
								// form functions
								handleChange={this.handleChange}
								// handleImageAsFile={this.handleImageAsFile}
								handleSubmit={this.handleSubmit}
								// form validation
								validator={this.validator}
								//*****state data used as props in Form */
								lastName={this.state.lastName}
								firstName={this.state.firstName}
								cohort={this.state.cohort}
								website={this.state.website}
								github={this.state.github}
								linkedIn={this.state.linkedIn}
								funFact={this.state.funFact}
							/>
						)}
					</div>
				</section>

				<main id='main'>
					<section className='wrapper'>
						{/* Displays cohort DropDown component  */}
						<DropDownCohort
							handleCohortSelect={this.handleCohortSelect}
							handleCohortSubmit={this.handleCohortSubmit}
							selectedDropDown={this.state.selectedDropDown}
						/>
						{/* Displays alpha button component */}
						<AlphaButton handleAlphaSubmit={this.handleAlphaSubmit} isAlpha={this.state.isAlpha} />

						<section className='studentProfiles'>
							{/* render cards based on filter  */}
							<div className='cardsContainer'>
								{displayCards.map((student, index) => {
									return (
										<StudentDisplay
											key={index} // to differentiate each record in React
											// all the state data used as props in the StudentDisplay
											firstName={student.firstName}
											lastName={student.lastName}
											cohort={student.cohort}
											website={student.website}
											github={student.github}
											linkedIn={student.linkedIn}
											funFact={student.funFact}
										/>
									);
								})}
							</div>

							{/* scroll to top button from npm package */}
							<ScrollToTop showUnder={160}>
								<span className='scroll'>▲</span>
							</ScrollToTop>
						</section>
					</section>
				</main>
				{/***************FOOTER************/}
				<footer className='wrapper'>
					<div className='footerFlex'>
						<p>
							Created by <a href='http://connietsangcodes.com'>Connie Tsang</a> at{' '}
							<a href='http://junocollege.com'>Juno College</a>
						</p>
						<p>
							image by{' '}
							<a href='https://unsplash.com/@sibilant?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
								Josephine Bredehoft
							</a>
							/
							<a href='https://unsplash.com/s/photos/cork-board?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
								Unsplash
							</a>
						</p>
					</div>
				</footer>
			</div>
		);
	}
}

export default App;

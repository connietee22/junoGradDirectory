import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import ScrollTop from 'react-scrolltop-button';
import SimpleReactValidator from 'simple-react-validator';
import StudentDisplay from './StudentDisplay.js';
import Form from './Form.js';
import DropDown from './DropDown.js';

class App extends Component {
	//************CREATING STATE DATA*********************/
	constructor() {
		super();
		this.state = {
			studentCards: [],
			firstName: '',
			lastName: '',
			cohort: 0,
			website: '',
			github: '',
			linkedIn: '',
			funFact: '',
			selectedDropDown: 'reset',
			isToggled: false,
		};
		this.validator = new SimpleReactValidator({
			messages: {
				required: "Aw! Don't leave this field empty!",
				alpha: "Are you Elon's baby? Proper name, please!",
				alpha_num: 'You sure you typed that right?',
				alpha_num_dash: "This doesn't look like a Github name",
			},
		});
	}

	//***********UPDATING STATE*************************//
	componentDidMount() {
		// call on the database
		const dbRef = firebase.database().ref();

		// on any change of the database, push the data into a state array
		dbRef.on('value', (response) => {
			// creating new array to hold the data
			const newState = [];
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
			this.setState({
				studentCards: newState,
			});
		});
	}

	//********EVENT HANDLER FUNCTION TO UPDATE FORM.JS MULTIPLE INPUTS' STATE VALUES *****************************//
	handleChange = (event) => {
		const value = event.target.value;

		this.setState({
			// this code with help from https://www.pluralsight.com
			...this.state,
			[event.target.name]: value,
		});
	};

	//**********EVENT LISTENER FOR FORM SUBMIT -- compiles all info on form submit and pushes to firebase*********/
	handleSubmit = (event) => {
		event.preventDefault();

		if (this.validator.allValid()) {
			alert("Sweet! You're in the directory!");
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
			});
		} else {
			this.validator.showMessages();
			// rerender to show messages for the first time
			// you can use the autoForceUpdate option to do this automatically`
			this.forceUpdate();
		}
	};

	//**********EVENT HANDLER FOR DROP-DOWN SELECT***************/
	handleSelect = (event) => {
		this.setState({
			selectedDropDown: event.target.value,
		});
	};

	//*********EVENT HANDLER FOR BUTTON TO SHOW FORM***********/

	handleButton = () => {
		this.setState({
			isToggled: !this.state.isToggled,
		});
	};

	//**********RENDERING THE INITIAL PAGE**********************/
	render() {
		return (
			<div className='App'>
				<header className='wrapper'>
					<h1>
						<span className='junoType'>Juno College</span>Grad Directory
					</h1>
					<div className='headerButtons'>
						<button onClick={this.handleButton}>Add my name!</button>
						<a href='#main'>
							<button>Just browse</button>
						</a>
					</div>
				</header>
				<section className='wrapper'>
					<div className='formToFill'>
						{/* to render Form on page when  "isToggle" switches to true */}
						{this.state.isToggled && (
							<Form
								/* props that pass in the value of a function */
								handleChange={this.handleChange}
								handleSubmit={this.handleSubmit}
								validator={this.validator}
								// state data used as props in Form
								lastName={this.state.lastName}
								firstName={this.state.firstName}
								cohort={this.state.cohort}
								website={this.state.website}
								github={this.state.github}
								linkedIn={this.state.linkedIn}
								funFact={this.state.funFact}
							/>

							// { have a state that checks if all items in form are filled }
						)}
					</div>
				</section>

				<main id='main'>
					{/* Pulling in DropDown component to render the filter dropdown on page */}
					<DropDown handleSelect={this.handleSelect} selectedDropDown={this.selectedDropDown} />

					<section className='studentProfiles wrapper'>
						<div className='cardsContainer'>
							{/* render cards based on filter that match cohort #  */}
							{/* map over all the students based on the filter results */}
							{this.state.studentCards
								.filter((student) => {
									if (this.state.selectedDropDown === 'reset') {
										return true; // if no cohort is chosen from the drop-down menu, return all the students
									} else if (student.cohort === this.state.selectedDropDown) {
										return true; // if student cohort property matches the current dropdown, then return everything in this filter
									} else {
										return false; // if any other possible mistake, return false
									}
								})
								.map((student, index) => {
									return (
										<StudentDisplay
											key={index} // to differentiate each record in React
											// this is all the state data to be used as props in the StudentDisplay
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
						<ScrollTop text='▲' className='scroll' />
					</section>
				</main>
				<footer className='wrapper'>
					<div className='footerFlex'>
						<p>Created by Connie Tsang at Juno College</p>
						<p>
							Photo by{' '}
							<a href='https://unsplash.com/@sibilant?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
								Josephine Bredehoft
							</a>{' '}
							on{' '}
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

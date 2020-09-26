import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import StudentDisplay from './StudentDisplay.js'
import Form from './Form.js'
import DropDown from './DropDown.js'

class App extends Component {
	//  creating the state data
	constructor() {
		super();
		this.state = {
			studentCards: [],
			firstName: '',
			lastName: '',
			cohort: null,
			website: '',
			github: '',
			linkedIn: '',
			funFact: '',
			selectedDropDown: 'select',
		};
	}

	// updating state through componentDidMount
	componentDidMount() {
		// call on the database
		const dbRef = firebase.database().ref();

		// on any change of the database, push the data into a state array
		dbRef.on('value', (response) => {
			// creating new array to hold the data
			const newState = [];
			const data = response.val();

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

			// setting the new array of data from firebase into our state array, which we can manipulate for display
			this.setState({
				studentCards: newState,
			});
		});
	}

	//****EVENT HANDLER FUNCTION for FORM.JS -- IS THIS BETTER HERE OR IN FORM?
	handleFirstName = (event) => {
		this.setState({
			firstName: event.target.value,
		});
	};

	handleLastName = (event) => {
		this.setState({
			lastName: event.target.value,
		});
	};

	handleCohort = (event) => {
		this.setState({
			cohort: event.target.value, // this is returning as undefined
		});
	};

	handleWebsite = (event) => {
		this.setState({
			website: event.target.value,
		});
	};

	handleGithub = (event) => {
		this.setState({
			github: event.target.value,
		});
	};

	handleLinkedIn = (event) => {
		this.setState({
			linkedIn: event.target.value,
		});
	};

	handleFunFact = (event) => {
		this.setState({
			funFact: event.target.value,
		});
	};

	// *****EVENT LISTENER FOR FORM SUBMIT -- compiles all information on form submit
	handleSubmit = (event) => {
		event.preventDefault();

		// open portal to Firebase
		const dbRef = firebase.database().ref();

		// on form submit, gather values from all the inputs
		// change the individual data states
		this.setState({
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			cohort: this.state.cohort,
			website: this.state.website,
			github: this.state.github,
			linkedIn: this.state.linkedIn,
			funFact: this.state.funFact,
		});

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

		// reset input field ???**** What is this doing?
		this.setState({
			firstName: '',
			lastName: '',
			cohort: '',
			website: '',
			github: '',
			linkedIn: '',
			funFact: '',
		});
	};

	//*****EVENT HANDLER FOR DROP-DOWN SELECT - ??? HOW TO CONNECT VALUE OF DROPDOWN */
	handleClick = (event) => {
		console.log(event.target.value); // returns aZ
		this.setState({
			selectedDropDown: event.target.value, // this isn't saving (see console log below)
		});
		console.log(this.selectedDropDown); // returns undefined
	};

	//****rendering the results on the page
	render() {
		return (
			<div className="App">
				<header className="wrapper">
					<h1>
						<span className="junoType">Juno College</span>Grad Directory
					</h1>
					<div className="formToFill">
						{/* rendering Form on page */}
						<Form
							/* props that pass in the value of a function */
							handleFirstName={this.handleFirstName}
							handleLastName={this.handleLastName}
							handleCohort={this.handleCohort}
							handleWebsite={this.handleWebsite}
							handleGithub={this.handleGithub}
							handleLinkedIn={this.handleLinkedIn}
							handleFunFact={this.handleFunFact}
							handleSubmit={this.handleSubmit}
							// state data used as props in Form
							lastName={this.lastName}
							firstName={this.firstName}
							cohort={this.cohort}
							website={this.website}
							github={this.github}
							linkedIn={this.linkedIn}
							funFact={this.funFact}
						/>
					</div>
				</header>

				<main>
					{/* to render drop-down menu on page */}
					<DropDown handleClick={this.handleClick} selectedDropDown={this.selectedDropDown} />

					{/* JSX TO DISPLAY CORRECT DATA */}
					{/* { this.state.selectedDropDown == "aZ" ? write code here to go through studentCards state array and alphabetize? : null??? 	 } */}

					<section className="studentProfiles wrapper">
						<div className="cardsContainer">
							{/* mapping over the entire array of all students in the database */}
							{this.state.studentCards.map((student, index) => {
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
					</section>
				</main>
				<footer>Created by Connie Tsang at Juno College</footer>
			</div>
		);
	}
}

export default App;


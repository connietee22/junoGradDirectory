import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import StudentDisplay from './StudentDisplay.js'
import Form from './Form.js'

class App extends Component {
	//  creating the state data
	constructor() {
		super();
		this.state = {
			studentCards: [],
			firstName: '',
			lastName: '',
      website: '',
      github: '',
      linkedIn: '',
		};
	}

	// updating state through componentDidMount
	componentDidMount() {
		// call on the database
		const dbRef = firebase.database().ref();

		dbRef.on('value', (response) => {
			// creating new array to hold the data
			const newState = [];
			const data = response.val();

			for (const key in data) {
				newState.push({
					key: key,
					firstName: data[key].firstName,
					lastName: data[key].lastName,
          website: data[key].website,
          github: data[key].github,
          linkedIn: data[key].linkedIn,
				});
			}

			this.setState({
				studentCards: newState,
			});
		});
		// ensure database and state are both being updated (hopefully at the same time)
	}

	// for FORM
	// define a function
	// handle change for each input
	// pass the function into the form as a prop
	// call the handle change function in the form
	// pass the info from form into the function call as an argument
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

	// state in form --> would still need to get into app --> define the handle submit in app, pass in form, call in form, pass in all state value - (remember arrow function to add)

	// on form submit gathering values from all the inputs
	// handleSubmit - take states and form them into object
	// update db firebase and then form into object

	handleSubmit = (event) => {
		event.preventDefault();

		// open portal to Firebase
    const dbRef = firebase.database().ref();

    // changes the state for individual data
    this.setState ({
			firstName: this.state.firstName,
			lastName: this.state.lastName,
      website: this.state.website,
      github: this.state.github,
      linkedIn: this.state.linkedIn,
    });

		// add new record to Firebase
    dbRef.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      website: this.state.website,
      github: this.state.github,
      linkedIn: this.state.linkedIn,
    });

		// reset input field
		// this.setState({
		// 	firstName: '',
		// 	lastName: '',
    //   website: '',
    //   github: '',
    //   linkedIn: '',
		// });
	};

	//  const dbRef = firebase.database().ref();

	// rendering the results on the page
	render() {
		return (
			<div className="App">
				<header className="wrapper">
					<h1>
						<span className="junoType">Juno College</span>Grad Directory
					</h1>
					<div className="formToFill">
						{/* handlefirstname is a prop that passes in the value of a function */}

						<Form
							handleFirstName={this.handleFirstName}
							handleLastName={this.handleLastName}
							handleWebsite={this.handleWebsite}
							handleGithub={this.handleGithub}
							handleLinkedIn={this.handleLinkedIn}
							handleSubmit={this.handleSubmit}
							lastName={this.lastName}
							firstName={this.firstName}
              website={this.website}
              github={this.github}
              linkedIn={this.linkedIn}
						/>
					</div>
				</header>

				{/* mapping over the entire array -- all of the students */}
				<main>
					<section className="studentProfiles wrapper">
						<div className="cardsContainer">
							{this.state.studentCards.map((student, index) => {
								return (
									<StudentDisplay
										key={index}
										firstName={student.firstName} // the value doesn't matter here --
										lastName={student.lastName}
                    website={student.website}
                    github={student.github}
                    linkedIn={student.linkedIn}
									/>
								);
							})}
						</div>
					</section>
				</main>
				<footer></footer>
			</div>
		);
	}
}

export default App;


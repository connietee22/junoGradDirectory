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
			studentCards: [
				{ firstName: 'connie', lastName: 'tsang', website: 'http://www.etc.com' },
				{ firstName: 'alex', lastName: 'dodd', website: 'http://www.hello.com' },
			],
			firstName: '',
			lastName: '',
			website: '',
			userInput: '',
		};
	}

	// updating this.state through this
	componentDidMount() {
		// call on the database
		const dbRef = firebase.database().ref();

		dbRef.on('value', (response) => {
			// creating new array to hold the data
			const newState = [];
			const data = response.val();
			console.log(data);

			for (const key in data) {
				newState.push({
					key: key,
					firstName: data[key].firstName,
					lastName: data[key].lastName,
					website: data[key].website,
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
		console.log(event.target.value);
		this.setState({
			firstName: event.target.value,
		});
	};

	handleLastName = (event) => {
		console.log(event.target.value);
		this.setState({
			lastName: event.target.value,
		});
  };
  
  handleWebsite = (event) => {
    this.setState({
      website: event.target.value
    })
  }

	// state in form --> would still need to get into app --> define the handle submit in app, pass in form, call in form, pass in all state value - (remember arrow function to add)

	// on form submit gathering values from all the inputs
	// handleSubmit - take states and form them into object
  // update db firebase and then form into object
  
  handleSubmit = (event) => {
		event.preventDefault();

		// open portal to Firebase
		const dbRef = firebase.database().ref();

    // console.log(this.state.firstName);
    
		// add new record to Firebase
    dbRef.push({ 'firstName': this.state.firstName, 'lastName': this.state.lastName, 'website': this.state.website });
    console.log(dbRef);

		// reset input field
		this.setState({
      firstName: '',
      lastName: '',
      website: '',
		});
  }

	//  const dbRef = firebase.database().ref();

	// rendering the results on the page
	render() {
		return (
			<div className="App wrapper">
				<header>
					<h1>
						<span className="junoType">Juno College</span>Grad Directory
					</h1>
					<div className="formToFill">
						{/* handlefirstname is a prop that passes in the value of a function */}
						<Form
							handleFirstName={this.handleFirstName}
							handlelastName={this.handleLastName}
							handleSubmit={this.handleSubmit}
						/>
					</div>
				</header>
				{/* <section className="gradForm">
          
        </section> */}

				{/* mapping over the entire array -- all of the students */}
				<section className="studentProfiles">
					{this.state.studentCards.map((student, index) => {
						return (
							<StudentDisplay
								key={index}
								firstName={student.firstName} // the value doesn't matter here --
								lastName={student.lastName}
								website={student.website}
							/>
						);
					})}
				</section>
			</div>
		);
	}
}

export default App;


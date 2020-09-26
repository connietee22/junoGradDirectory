import React, { Component } from 'react';

class Form extends Component {
    render () {
        // console.log(this.props); // will display the object with the method - when we create props, we creaete properties on an object
        // we need to use the function as an onchange handler

// keep track of each change in the inputs and store the values in state -- best practice in react
// on submit event listener -- needs a function. that wll take all the values in state that turns them into one object that can be pushed to db and studentCard array. 

// onchange event listeners can live in this form and can track the state of them in this form

// on submit should be in app.js
        
        return (
			<>
				<p>Survive Juno College's bootcamp? Add your card to the directory!</p>
				<form>
					<label htmlFor="firstName" aria-label="enter first name">
						First Name:
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						onChange={this.props.handleFirstName}
						value={this.props.firstName}
					></input>

					<label htmlFor="lastName" aria-label="enter last name">
						Last Name:
					</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						onChange={this.props.handleLastName}
						value={this.props.lastName}
					></input>

					<label htmlFor="website" aria-label="enter website details">
						Website
					</label>
					<input
						type="text"
						id="website"
						name="website"
						placeholder="website"
						onChange={this.props.handleWebsite}
						value={this.props.website}
					></input>

					<label htmlFor="github">Github:</label>
					<input type="text" id="github" name="github"></input>
					<label htmlFor="linkedIn">LinkedIn:</label>
					<input type="text" id="linkedIn" name="linkedIn"></input>
					<button onClick={this.props.handleSubmit}>Submit</button>
				</form>
			</>
		);
    }
}

export default Form;
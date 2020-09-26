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
				<p>Survive Juno College's bootcamp, too? Add your card to the directory!</p>
				<form>
					<label htmlFor="firstName">First Name:</label>
					<input type="text" id="firstName" name="firstName" onChange={this.props.handleFirstName}></input>
					<label htmlFor="lastName">Last Name:</label>
					<input type="text" id="lastName" name="lastName"></input>
					<label htmlFor="website" aria-label="input ">
						Website
					</label>
					<input type="text" id="website" name="website" placeholder="website"></input>
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
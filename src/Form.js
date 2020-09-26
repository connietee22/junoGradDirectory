import React, { Component } from 'react';

class Form extends Component {
    render () {
		// console.log(this.props); // will display the object with the method - when we create props, we creaete properties on an object
		// we need to use the function as an onchange handler

		// keep track of each change in the inputs and store the values in state -- best practice in react
		// on submit event listener -- needs a function. that wll take all the values in state that turns them into one object that can be pushed to db and studentCard array.
		// for FORM
		// define a function
		// handle change for each input
		// pass the function into the form as a prop
		// call the handle change function in the form
		// pass the info from form into the function call as an argument

		// onchange event listeners can live in this form and can track the state of them in this form

		// on submit should be in app.js

		return (
			<>
				<form>
					<p>Survive Juno College's bootcamp? Add your card to the directory!</p>
					<div className="inputsFlex">
						<label htmlFor="firstName" aria-label="enter first name"></label>
						<input
							type="text"
							id="firstName"
                            name="firstName"
                            // function will trigger on change of this element - WHY NOT ()??
							onChange={this.props.handleFirstName}
							value={this.props.firstName}
							// why do I need to put this value ^ here?
							placeholder="first name"
						></input>

						<label htmlFor="lastName" aria-label="enter last name"></label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							onChange={this.props.handleLastName}
							value={this.props.lastName}
							placeholder="last name"
						></input>
					</div>

					<label htmlFor="website" aria-label="enter website address"></label>
					<input
						type="url"
						id="website"
						name="website"
						className="standAloneInput"
						placeholder="website"
						onChange={this.props.handleWebsite}
						value={this.props.website}
					></input>

					<div className="inputsFlex">
						<label htmlFor="github" aria-label="enter github username"></label>
						<input
							type="url"
							id="github"
							name="github"
							onChange={this.props.handleGithub}
							value={this.props.github}
							placeholder="github profile"
						></input>

						<label htmlFor="linkedIn" aria-label="enter linkedin username"></label>
						<input
							type="url"
							id="linkedIn"
							name="linkedIn"
							onChange={this.props.handleLinkedIn}
							value={this.props.linkedIn}
							placeholder="linkedIn profile"
						></input>
					</div>

					<label htmlFor="funFact" aria-label="enter one fun fact about yourself"></label>
					<textarea
						maxLength="100"
						id="funFact"
						name="funFact"
						className="standAloneInput"
						onChange={this.props.handleFunFact}
						value={this.props.funFact}
						placeholder="One fun fact about yourself"
					></textarea>

					<button onClick={this.props.handleSubmit}>Submit</button>
				</form>
			</>
		);
	}
}

export default Form;
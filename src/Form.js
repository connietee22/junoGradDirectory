import React, { Component } from 'react';


class Form extends Component {
    render () {
		
		// for FORM
		// define a function
		// handle change for each input
		// pass the function into the form as a prop
		// call the handle change function in the form
		// pass the info from form into the function call as an argument

		// onchange event listeners can live in this form and can track the state of them in this form

		return (
			<>
				<form>
					<p className="boldLabel">Survived Juno College's bootcamp?</p>
					<p className="boldLabel">Add your card to the directory!</p>
					<div className="inputsFlex">
						<label htmlFor="firstName" aria-label="enter first name"></label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							// function will trigger on change of this element
							onChange={this.props.handleChange}
							// this will always track the changes of the value
							value={this.props.firstName}
							placeholder="first name"
							noValidate
						></input>

						<label htmlFor="lastName" aria-label="enter last name"></label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							// onChange={this.props.handleLastName}
							onChange={this.props.handleChange}
							value={this.props.lastName}
							placeholder="last name"
							noValidate
						></input>
					</div>

					<label htmlFor="cohort" aria-label="enter cohort number"></label>
					<input
						type="number"
						id="cohort"
						name="cohort"
						className="standAloneInput"
						placeholder="Cohort number"
						onChange={this.props.handleChange}
						// onChange={this.props.handleCohort}
						value={this.props.cohort}
						noValidate
					></input>

					<label htmlFor="website" aria-label="enter website address"></label>
					<input
						type="url"
						id="website"
						name="website"
						className="standAloneInput"
						placeholder="website"
						onChange={this.props.handleChange}
						// onChange={this.props.handleWebsite}
						value={this.props.website}
						noValidate
					></input>

					<div className="inputsFlex">
						<label htmlFor="github" aria-label="enter github username"></label>
						<input
							type="url"
							id="github"
							name="github"
							onChange={this.props.handleChange}
							// onChange={this.props.handleGithub}
							value={this.props.github}
							placeholder="github profile"
							noValidate
						></input>

						<label htmlFor="linkedIn" aria-label="enter linkedin username"></label>
						<input
							type="url"
							id="linkedIn"
							name="linkedIn"
							onChange={this.props.handleChange}
							// onChange={this.props.handleLinkedIn}
							value={this.props.linkedIn}
							placeholder="linkedIn profile"
							noValidate
						></input>
					</div>

					<label htmlFor="funFact" aria-label="enter one fun fact about yourself"></label>
					<textarea
						maxLength="100"
						id="funFact"
						name="funFact"
						className="standAloneInput"
						onChange={this.props.handleChange}
						// onChange={this.props.handleFunFact}
						value={this.props.funFact}
						placeholder="One fun fact about yourself"
					></textarea>

					<button onClick={this.props.handleSubmit} href="#main" noValidate>
						Submit
					</button>
				</form>
			</>
		);
	}
}

export default Form;
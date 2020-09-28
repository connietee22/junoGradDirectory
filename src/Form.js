import React, { Component } from 'react';


class Form extends Component {
    render () {

		return (
			<>
				<form>
					<p className="boldLabel">Survived Juno College's bootcamp?</p>
					<p className="boldLabel">Add your card to the directory!</p>

					{/* INPUT - FIRST NAME */}
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
					></input>
					{/* determines the message to display when inputs are incorrect or missing */}
					{this.props.validator.message('firstName', this.props.firstName, 'required|alpha')}

					{/* INPUT - LAST NAME */}
					<label htmlFor="lastName" aria-label="enter last name"></label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						onChange={this.props.handleChange}
						value={this.props.lastName}
						placeholder="last name"
					></input>
					{this.props.validator.message('lastName', this.props.lastName, 'required|alpha')}

					{/* INPUT - COHORT FIELD */}
					<label htmlFor="cohort" aria-label="enter cohort number"></label>
					<input
						type="number"
						id="cohort"
						name="cohort"
						className="standAloneInput"
						placeholder="Cohort number"
						onChange={this.props.handleChange}
						value={this.props.cohort}
					></input>
					{this.props.validator.message('cohort', this.props.cohort, 'required|numeric|min:1,num|max:29,num')}

					{/* INPUT - WEBSITE FIELD */}
					<label htmlFor="website" aria-label="enter website address"></label>
					<input
						type="url"
						id="website"
						name="website"
						className="standAloneInput"
						placeholder="website"
						onChange={this.props.handleChange}
						value={this.props.website}
						pattern="https?://.+"
						title="Include http://"
					></input>
					{this.props.validator.message('website', this.props.website, 'required|url')}

				{/* INPUT - GITHUB FIELD */}
					<label htmlFor="github" aria-label="enter github username"></label>
					<input
						type="text"
						id="github"
						name="github"
						onChange={this.props.handleChange}
						value={this.props.github}
						placeholder="github username"
					></input>
					{this.props.validator.message('github', this.props.github, 'required|alpha_num_dash')}

					{/* INPUT - LINKEDIN */}
					<label htmlFor="linkedIn" aria-label="enter linkedin username"></label>
					<input
						type="text"
						id="linkedIn"
						name="linkedIn"
						onChange={this.props.handleChange}
						value={this.props.linkedIn}
						placeholder="linkedIn username"
					></input>
					{this.props.validator.message('linkedIn', this.props.linkedIn, 'required|alpha_num')}

					{/* INPUT - FUN FACT */}
					<label htmlFor="funFact" aria-label="enter one fun fact about yourself"></label>
					<textarea
						maxLength="100"
						id="funFact"
						name="funFact"
						className="standAloneInput"
						onChange={this.props.handleChange}
						value={this.props.funFact}
						placeholder="One fun fact about yourself"
					></textarea>
					{this.props.validator.message('funFact', this.props.funFact, 'required')}

					{/* TO SUBMIT FORM */}
					<button onClick={this.props.handleSubmit} href="#main">
						Submit
					</button>
				</form>
			</>
		);
	}
}

export default Form;
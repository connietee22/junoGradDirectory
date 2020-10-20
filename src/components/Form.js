import React from 'react';

// Form to collect student user information
const Form = (props) => {
	return (
		<>
			<form id='mainForm' className='userForm'>
				{/****INPUT - FIRST NAME */}
				<div className='labelInput'>
					<label htmlFor='firstName'>First name</label>
					<input
						type='text'
						id='firstName'
						name='firstName'
						// function will trigger on change of this element
						onChange={props.handleChange}
						// this will always track the changes of the value
						value={props.firstName}
					></input>
				</div>
				{/* "required" message will appear if first name missing */}
				{props.validator.message('firstName', props.firstName, 'required|max: 20')}

				{/****INPUT - LAST NAME */}
				<div className="labelInput">
					<label htmlFor='lastName'>Last name</label>
					<input
						type='text'
						id='lastName'
						name='lastName'
						onChange={props.handleChange}
						value={props.lastName}
					></input>
				</div>
				{/* "required" message will appear if last name missing */}
				{props.validator.message('lastName', props.lastName, 'required|max: 20')}

				{/****INPUT - COHORT FIELD */}
				<div className="labelInput">
					<label htmlFor='cohort'>Cohort number</label>
					<input
						type='number'
						id='cohort'
						name='cohort'
						className='standAloneInput'
						onChange={props.handleChange}
						value={props.cohort}
					></input>
				</div>
				{/* message will appear if number missing or is not between 1 and 29 */}
				{props.validator.message('cohort', props.cohort, 'required|numeric|min:1,num|max:30,num')}

				{/****INPUT - WEBSITE FIELD */}
				<div className="labelInput">
					<label htmlFor='website'>Website</label>
					<input
						type='url'
						id='website'
						name='website'
						className='standAloneInput'
						placeholder='Include http://'
						onChange={props.handleChange}
						value={props.website}
						title='Include http://'
					></input>
				</div>
				{/* message will appear if missing or not an url abiding to the stated pattern */}
				{props.validator.message('website', props.website, 'required|url')}

				{/****INPUT - GITHUB FIELD */}
				<div className="labelInput">
					<label htmlFor='github'>Github username</label>
					<input
						type='text'
						id='github'
						name='github'
						onChange={props.handleChange}
						value={props.github}
					></input>
				</div>
				{/* message will appear if missing or does not adhere to github's alpha-numeric-dash requirement for usernames */}
				{props.validator.message('github', props.github, 'required|alpha_num_dash')}

				{/**** INPUT - LINKEDIN */}
				<div className="labelInput">
					<label htmlFor='linkedIn'>LinkedIn username</label>
					<input
						type='text'
						id='linkedIn'
						name='linkedIn'
						onChange={props.handleChange}
						value={props.linkedIn}
					></input>
				</div>
				{/* message will appear if missing or does not adhere to linkedin's alpha-numeric requirement for usernames */}
				{props.validator.message('linkedIn', props.linkedIn, 'required|alpha_num')}

				{/**** INPUT - FUN FACT */}
				<div className='labelInput'>
					<label htmlFor='funFact'>One fun fact!</label>
					<textarea
						maxLength='100'
						id='funFact'
						name='funFact'
						className='standAloneInput'
						onChange={props.handleChange}
						value={props.funFact}
					></textarea>
				</div>
				{/* message will appear if missing */}
				{props.validator.message('funFact', props.funFact, 'required')}

				{/**** TO SUBMIT FORM */}
				<button onClick={props.handleSubmit}>Submit</button>
			</form>
		</>
	);
};

export default Form;

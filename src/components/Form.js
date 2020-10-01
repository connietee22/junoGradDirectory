import React from 'react';

// Form to collect student user information
const Form = (props) => {
	return (
		<>
			<form id='mainForm' className='userForm'>
				{/****INPUT - FIRST NAME */}
				<label htmlFor='firstName' aria-label='enter first name'></label>
				<input
					type='text'
					id='firstName'
					name='firstName'
					// function will trigger on change of this element
					onChange={props.handleChange}
					// this will always track the changes of the value
					value={props.firstName}
					placeholder='first name'
				></input>
				{/* "required" message will appear if first name missing */}
				{props.validator.message('firstName', props.firstName, 'required|max: 20')}

				{/****INPUT - LAST NAME */}
				<label htmlFor='lastName' aria-label='enter last name'></label>
				<input
					type='text'
					id='lastName'
					name='lastName'
					onChange={props.handleChange}
					value={props.lastName}
					placeholder='last name'
				></input>
				{/* "required" message will appear if last name missing */}
				{props.validator.message('lastName', props.lastName, 'required|max: 20')}

				{/****INPUT - COHORT FIELD */}
				<label htmlFor='cohort' aria-label='enter cohort number'></label>
				<input
					type='number'
					id='cohort'
					name='cohort'
					className='standAloneInput'
					placeholder='Cohort number'
					onChange={props.handleChange}
					value={props.cohort}
				></input>
				{/* message will appear if number missing or is not between 1 and 29 */}
				{props.validator.message('cohort', props.cohort, 'required|numeric|min:1,num|max:30,num')}

				{/****INPUT - WEBSITE FIELD */}
				<label htmlFor='website' aria-label='enter website address'></label>
				<input
					type='url'
					id='website'
					name='website'
					className='standAloneInput'
					placeholder='website'
					onChange={props.handleChange}
					value={props.website}
					pattern='https?://.+'
					title='Include http://'
				></input>
				{/* message will appear if missing or not an url abiding to the stated pattern */}
				{props.validator.message('website', props.website, 'required|url')}

				{/****INPUT - GITHUB FIELD */}
				<label htmlFor='github' aria-label='enter github username'></label>
				<input
					type='text'
					id='github'
					name='github'
					onChange={props.handleChange}
					value={props.github}
					placeholder='github username'
				></input>
				{/* message will appear if missing or does not adhere to github's alpha-numeric-dash requirement for usernames */}
				{props.validator.message('github', props.github, 'required|alpha_num_dash')}

				{/**** INPUT - LINKEDIN */}
				<label htmlFor='linkedIn' aria-label='enter linkedin username'></label>
				<input
					type='text'
					id='linkedIn'
					name='linkedIn'
					onChange={props.handleChange}
					value={props.linkedIn}
					placeholder='linkedIn username'
				></input>
				{/* message will appear if missing or does not adhere to linkedin's alpha-numeric requirement for usernames */}
				{props.validator.message('linkedIn', props.linkedIn, 'required|alpha_num')}

				{/**** INPUT - FUN FACT */}
				<label htmlFor='funFact' aria-label='enter one fun fact about yourself!'></label>
				<textarea
					maxLength='100'
					id='funFact'
					name='funFact'
					className='standAloneInput'
					onChange={props.handleChange}
					value={props.funFact}
					placeholder='Most importantly: one fun fact about yourself!'
				></textarea>
				{/* message will appear if missing */}
				{props.validator.message('funFact', props.funFact, 'required')}

				{/**** TO SUBMIT FORM */}
				<button onClick={props.handleSubmit}>Submit</button>
			</form>
		</>
	);
};

export default Form;

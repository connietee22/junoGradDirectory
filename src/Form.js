import React from 'react';

const Form = (props) => {
	return (
		<>
			<form>
				<p className='boldLabel'>Survived Juno College's bootcamp?</p>
				<p className='boldLabel'>Add your card to the directory!</p>

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
				{/* determines the message to display when inputs are incorrect or missing */}
				{props.validator.message('firstName', props.firstName, 'required')}

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
				{props.validator.message('lastName', props.lastName, 'required')}

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
				{props.validator.message('cohort', props.cohort, 'required|numeric|min:1,num|max:29,num')}

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
				{props.validator.message('linkedIn', props.linkedIn, 'required|alpha_num')}

				{/**** INPUT - FUN FACT */}
				<label htmlFor='funFact' aria-label='enter one fun fact about yourself'></label>
				<textarea
					maxLength='100'
					id='funFact'
					name='funFact'
					className='standAloneInput'
					onChange={props.handleChange}
					value={props.funFact}
					placeholder='One fun fact about yourself'
				></textarea>
				{props.validator.message('funFact', props.funFact, 'required')}

				{/***** INPUT - IMAGE UPLOAD */}
				<input
					// allows user to dive into file directory and upload image to the browser
					type='file'
					onChange={props.handleImageAsFile}
				/>

				{/**** TO SUBMIT FORM */}
				<button onClick={props.handleSubmit} href='#main'>
					Submit
				</button>
			</form>
		</>
	);
};

export default Form;

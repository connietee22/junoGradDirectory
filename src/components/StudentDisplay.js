import React from 'react';

//*****TO DISPLAY INDIVIDUAL STUDENT CARDS */
const StudentDisplay = (props) => {
	return (
		<>
			<div>
				<span className='studentName boldLabel'>
					{props.firstName} {props.lastName}
				</span>
				<p className='boldLabel'>cohort {props.cohort}</p>

				<p>
					<a href={props.website}>
						<i className='fas fa-desktop' aria-hidden='true'></i>
						portfolio
					</a>
				</p>

				<p>
					<a href={`https://github.com/${props.github}`}>
						<i className='fab fa-github-square' aria-hidden='true'></i>
						{props.github}
					</a>
				</p>
				<p>
					<a href={`https://www.linkedin.com/in/${props.linkedIn}`}>
						<i className='fab fa-linkedin' aria-hidden='true'></i>
						{props.linkedIn}
					</a>
				</p>
				<p>
					<span className='boldLabel'>Fun fact: </span>
					{props.funFact}
				</p>
			</div>
		</>
	);
};

export default StudentDisplay;

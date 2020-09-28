import React from 'react';

const StudentDisplay = (props) => {
	return (
		<>
			<div>
				<p className='studentName boldLabel'>
					{props.firstName} {props.lastName}
				</p>
				<p className='boldLabel'>cohort {props.cohort}</p>

				<p>
					<a href={props.website}>
						<i className='fas fa-desktop' aria-hidden='true'></i>
						{props.website}
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
					<span className='boldLabel'>About Me: </span>
					{props.funFact}
				</p>
			</div>
		</>
	);
};

export default StudentDisplay;

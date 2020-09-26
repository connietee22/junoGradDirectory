import React, { Component } from 'react';


// you only need to access one student here so state does not have to be here!

class StudentDisplay extends Component {
    render() {

        return (
			<>
				<div>
					<p className="studentName boldLabel">First Name: {this.props.firstName}</p>
					<p className="studentName boldLabel">Last Name: {this.props.lastName}</p>
					<p><span className="boldLabel">Website: {this.props.website}</span></p>
					{/* <p><span className="boldLabel">Cohort: </span> </p> */}
					{/* 
                    <p><i class="fab fa-github-square"></i></p>
                    <p><i class="fab fa-linkedin"></i></p>
                    <p><span className="boldLabel">About Me:</span></p> */}
				</div>
			</>
		);
    }
}

export default StudentDisplay;
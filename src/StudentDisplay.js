import React, { Component } from 'react';

// you only need to access one student here so this does not need to have state!
class StudentDisplay extends Component {
    render() {
        return (
			<>
				<div>
					<p className="studentName boldLabel">
						{this.props.firstName} {this.props.lastName}
					</p>
						<span className="boldLabel">
							<a href={this.props.website}>Website</a>
						</span>
				
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
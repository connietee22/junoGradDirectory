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

					<p>
						<a href={this.props.github}>
							<i className="fab fa-github-square"></i>
							{this.props.github}
						</a>
					</p>
					<p>
						<a href={this.props.linkedIn}>
							<i className="fab fa-linkedin"></i>
							{this.props.linkedIn}
						</a>
					</p>
					<p>
						<span className="boldLabel">About Me: </span>
                        {this.props.funFact}
					</p>
				</div>
			</>
		);
    }
}

export default StudentDisplay;
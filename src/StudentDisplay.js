import React, { Component } from 'react';


// i can change this to function?
// const StudentDisplay = (props) => {
// 	return (
// 		<div>
// 			<p className="studentName boldLabel">{this.props.firstName} {this.props.lastName}</p>
// // 		</div>
// 	);
// };

// only need to access one student here so this does not need state!
class StudentDisplay extends Component {
    render() {
        return (
			<>
				<div>
					<p className="studentName boldLabel">
						{this.props.firstName} {this.props.lastName}
					</p>
					<p className="boldLabel">cohort {this.props.cohort}</p>

					<p>
						<a href={this.props.website}>
							<i class="fas fa-desktop"></i>
							{this.props.website}
						</a>
					</p>

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
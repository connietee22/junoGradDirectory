import React, { Component } from 'react';

class StudentCard extends Component {

    

    render() {
        return (
           <>
                <div>
                    <p className="studentName boldLabel">Student Name</p>
                    <p><span className="boldLabel">Cohort: </span> </p>
                    <p><span className="boldLabel">Website:</span> </p>
                    <p><i class="fab fa-github-square"></i></p>
                    <p><i class="fab fa-linkedin"></i></p>
                    <p><span className="boldLabel">About Me:</span></p>
                </div>
           </>
        );
    }
}

export default StudentCard;
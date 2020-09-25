import React, { Component } from 'react';

class Form extends Component {
    render () {
        return (
            <>
            <p>Did you survive the Juno College bootcamp? Add your card to the directory!</p>
                <form>
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName"></input>
                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName"></input>
                    <label for="website" aria-label="input ">Website</label>
                    <input type="text" id="website" name="website" placeholder="website"></input>
                    <label for="github">Github:</label>
                    <input type="text" id="github" name="github"></input>
                    <label for="linkedIn">LinkedIn:</label>
                    <input type="text" id="linkedIn" name="linkedIn"></input>
                </form>
            </>
        )
    }
}

export default Form;
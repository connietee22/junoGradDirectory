import React, { Component } from 'react';

/******DROP-DOWN MENU TO SORT CARDS */
class DropDown extends Component {

    render() {
        return (
			<form>
				<label htmlFor="sortCards" aria-label="select drop-down option to sort student cards"></label>
				<select id="sortCards" value={this.props.selectedDropDown} onSelect={this.props.handleClick}>
					<option value="select">Sort students by:</option>
					<option value="sortAz">A-Z</option>
					<option value="sortCohort">Cohort</option>
				</select>
			</form>
		);
    }
}

export default DropDown;
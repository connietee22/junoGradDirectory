import React, { Component } from 'react';

/******DROP-DOWN MENU TO SORT CARDS */
class DropDown extends Component {

    render() {
        return (
			<form>
				<label htmlFor="filterCohort" aria-label="select drop-down option to sort student cards"></label>
				<select id="filterCohort" value={this.props.selectedDropDown} onChange={this.props.handleSelect}>
					<option value="select">Filter by cohort:</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
					<option value="13">13</option>
				</select>
			</form>
		);
    }
}

export default DropDown;
import React from 'react';

/******DROP-DOWN MENU TO SORT CARDS */

const NameDropDown = (props) => {
	return (
		<form>
			<label htmlFor='sortName' aria-label='select drop-down option to sort student cards by name'></label>
			<select id='sortName' value={props.selectedAlpha} onChange={props.handleAlphaSelect}>
				<option value='reset'>Sort By Name:</option>
				<option value='aToZ'>A-Z</option>
				<option value='zToA'>Z-A</option>
			</select>
		</form>
	);
};

export default NameDropDown;
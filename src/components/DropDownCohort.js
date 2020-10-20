import React from 'react';

/******DROP-DOWN MENU TO SORT CARDS */

const DropDownCohort = (props) => {

		return (
			<form className='filterContainer'>
				<label
					htmlFor='filterCohort'
					aria-label='select drop-down option to filter student cards by cohort number'
				></label>
				<select
					id='filterCohort'
					value={props.selectedDropDown}
					onChange={props.handleCohortSubmit}
				>
					<option value='reset'>Filter by Cohort</option>
					<option value='reset'>ALL COHORTS</option>
					<option value='1'>COHORT 1</option>
					<option value='2'>COHORT 2</option>
					<option value='3'>COHORT 3</option>
					<option value='4'>COHORT 4</option>
					<option value='5'>COHORT 5</option>
					<option value='6'>COHORT 6</option>
					<option value='7'>COHORT 7</option>
					<option value='8'>COHORT 8</option>
					<option value='9'>COHORT 9</option>
					<option value='10'>COHORT 10</option>
					<option value='11'>COHORT 11</option>
					<option value='12'>COHORT 12</option>
					<option value='13'>COHORT 13</option>
					<option value='14'>COHORT 14</option>
					<option value='15'>COHORT 15</option>
					<option value='16'>COHORT 16</option>
					<option value='17'>COHORT 17</option>
					<option value='18'>COHORT 18</option>
					<option value='19'>COHORT 19</option>
					<option value='20'>COHORT 20</option>
					<option value='21'>COHORT 21</option>
					<option value='22'>COHORT 22</option>
					<option value='23'>COHORT 23</option>
					<option value='24'>COHORT 24</option>
					<option value='25'>COHORT 25</option>
					<option value='26'>COHORT 26</option>
					<option value='27'>COHORT 27</option>
					<option value='28'>COHORT 28</option>
					<option value='29'>COHORT 29</option>
					<option value='30'>COHORT 30</option>
				</select>
			</form>
		);
	}


export default DropDownCohort;
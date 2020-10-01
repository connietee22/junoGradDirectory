import React from 'react';
// import { useState } from 'react';


/******BUTTON TO ALPHABETIZE CARDS*****/
const AlphaButton = (props) => {

	return (
		<div className="alphaContainer">
			<button onClick={props.handleAlphaSubmit} className={props.isAlpha ? 'alphaClicked' : 'alphaLabel'}>{props.isAlpha ? 'Sort by date added >>' : 'Sort by alphabet >>'}</button>
		</div>
	)
};

export default AlphaButton;
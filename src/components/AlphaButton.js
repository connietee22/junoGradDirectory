import React from 'react';

/******BUTTON TO ALPHABETIZE CARDS*****/
const AlphaButton = (props) => {

	return (
		<div className="alphaContainer">
			{/* Depending on the toggle stage of alpha button, will change the text and classname */}
			<button onClick={props.handleAlphaSubmit} className={props.isAlpha ? 'alphaClicked' : 'alphaLabel'}>{props.isAlpha ? 'Sort by date added >>' : 'Sort by alphabet >>'}</button>
		</div>
	)
};

export default AlphaButton;
import React from 'react';
import { useState } from 'react';


/******BUTTON TO ALPHABETIZE CARDS*****/
const AlphaButton = (props) => {

        // using 
	const [buttonText, setButtonText] = useState('Sort by alpha'); // setting default text for button;
        const changeText = (text) => setButtonText(text); // function to set place new text
        

	return (
		<form className='alphaFlex'>
			<label
                        // on click, if !props.isAlpha (is true), then the list is alphabetized and the text in the label will change to sort by date, and vice versa
				onClick={!props.isAlpha ? (() => changeText('Sort by date added')) : (() => changeText('Sort by alpha'))}
                                htmlFor='alphaButton'
                                // if !props.isAlpha (is true) use the 'alphaLabel' class but the label/button. otherwise, use the darker 'alphaClicked' class.
				className={(!props.isAlpha && 'alphaLabel') || (props.isAlpha && 'alphaClicked')}
			>
				{buttonText}{' '}
				<input
					type='checkbox'
					id='alphaButton'
					className='alphaButton'
					onChange={props.handleAlphaSubmit}
				></input>
			</label>
		</form>
	);
};;

export default AlphaButton;
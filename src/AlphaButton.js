import React from 'react';

/******DROP-DOWN MENU TO SORT CARDS */

const AlphaButton = (props) => {

        return (
                <form className="alphaFlex">
                        <label htmlFor="alphaButton" className="alphaLabel">Sort by Alpha</label>
                        <input type="checkbox" id="alphaButton" className="alphaButton" onChange={props.handleAlphaSubmit}></input>
                </form>
		);
};

export default AlphaButton;
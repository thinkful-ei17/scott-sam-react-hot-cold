import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    
    
    return (
        <form onSubmit={e =>{
            e.preventDefault();
            props.handleSubmit();
        }}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" value={props.stateValue} required onChange={e => props.valueGuessed(parseInt(e.target.value, 10))}/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/> 
        </form>
    );
};


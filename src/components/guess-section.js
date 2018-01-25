import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm valueGuessed={value => props.valueGuessed(value)} stateValue={props.stateValue}  handleSubmit={() => props.handleSubmit()}/>
        </section>
    );
}


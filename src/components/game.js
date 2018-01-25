import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            value: null,
            count: 3,
            guesses: [10, 15, 28],
            feedback: 'Make your guess!'
        }
    };

    handleSubmit(){
        console.log('handleSubmit tracks');
    }

    render(){
        console.log('this value:', this.state.value);
        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} valueGuessed={value => this.setState({value})} handleSubmit={()=> this.handleSubmit()}/>
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}


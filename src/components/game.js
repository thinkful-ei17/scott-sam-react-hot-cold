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
        console.log('value in handleSubmit:', this.state.value);
        console.log('old:', this.state.guesses);
        const newGuesses = [...this.state.guesses, this.state.value];
        this.setState({count: this.state.count + 1});
        this.setState({guesses: newGuesses}); 
    }

    render(){
        console.log('this value in render:', this.state.value);
        console.log('new:', this.state.guesses);
        console.log('count:', this.state.count);
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


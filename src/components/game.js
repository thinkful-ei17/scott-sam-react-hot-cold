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
            count: 0,
            answer: this.generateAnswer(),
            guesses: [],
            feedback: 'Make your guess!'
        }
    };

    generateAnswer(){
        return Math.floor(Math.random()*(100))+1;
    }

    checkAnswer(){
        if (this.state.value === this.state.answer){
            this.setState({feedback: 'CORRECT! CONGRATULATIONS!'});
        } else if (Math.abs(this.state.value - this.state.answer) < 10){
            this.setState({feedback: 'HOT!'});
        } else if (Math.abs(this.state.value - this.state.answer) < 20){
            this.setState({feedback: 'Getting Warmer'})
        } else if (Math.abs(this.state.value - this.state.answer) > 90){
            this.setState({feedback: 'ICE, ICE, BABY!'});
        } else {
            this.setState({feedback: 'Cold'});
        }
    }

    handleSubmit(){
        console.log('value in handleSubmit:', this.state.value);
        console.log('old:', this.state.guesses);
        console.log(Math.abs(this.state.value - this.state.answer));
        const newGuesses = [...this.state.guesses, this.state.value];
        this.setState({count: this.state.count + 1});
        this.setState({guesses: newGuesses});
        this.checkAnswer();
    }

    render(){
        console.log('answer:', this.state.answer);
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


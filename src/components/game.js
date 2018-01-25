import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            value: '',
            answer: this.generateAnswer(),
            guesses: [],
            feedback: 'Make your guess!',
            showModal: false
        }
    };

    generateAnswer(){
        return Math.floor(Math.random()*(100))+1;
    }

    checkAnswer(){
        if (this.state.value === this.state.answer){
            return 'CORRECT! CONGRATULATIONS!';
        } else if (Math.abs(this.state.value - this.state.answer) < 10){
            return 'HOT!';
        } else if (Math.abs(this.state.value - this.state.answer) < 20){
            return 'Getting Warmer';
        } else if (Math.abs(this.state.value - this.state.answer) > 90){
            return 'ICE, ICE, BABY!';
        } else {
            return 'Cold';
        }  
    }

    handleSubmit(){ 
        // console.log('value in handleSubmit:', this.state.value);
        // console.log('old:', this.state.guesses);
        // console.log(Math.abs(this.state.value - this.state.answer));
        // console.log('oldstate:', this.state);
        const newGuesses = [...this.state.guesses, this.state.value];
        this.setState({
            value: '',
            guesses: newGuesses,
            feedback: this.checkAnswer()
         });
        // console.log('newstate:',this.state);
    }

    resetState(){
        this.setState({
            value: '',
            answer: this.generateAnswer(),
            guesses: [],
            feedback: 'Make your guess!'
        });
    }

    toggleShowModal(){
        // console.log('what');
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render(){
        // console.log('answer:', this.state.answer);
        // console.log('this value in render:', this.state.value);
        // console.log('new:', this.state.guesses);
        return (
            <div>
                <Header newGame={()=> this.resetState()} handleClick={()=> this.toggleShowModal()} showModal={this.state.showModal}/>
                <GuessSection feedback={this.state.feedback} stateValue= {this.state.value} valueGuessed={value => this.setState({value})} handleSubmit={()=> this.handleSubmit()}/>
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}


import React, { Component } from 'react';

export default class EvenAndOdd extends Component {

    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    assignEvenAndOdds(userInput) {
        let arr = userInput.split(',')
        let evens = []
        let odds = []

        arr.forEach(val => {
            if(val % 2 === 0) { return evens.push( parseInt(val, 10) ) }
            else { return odds.push( parseInt(val, 10) ) }
        })

        this.setState({ evenArray: evens, oddArray: odds })
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine"
                    onChange={ (e) => this.handleChange(e.target.value) }/>
                <button
                    onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
                <span className="resultsBox">{ JSON.stringify(this.state.evenArray) }</span>
                <span className="resultsBox">{ JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}
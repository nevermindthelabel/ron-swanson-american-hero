import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

export default class MediumQuote extends Component {

  state = {
    quote: 'Click button for words to live by.'
  }

  getQuote = () => {
    axios.get("https//ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((req, next) => {

        let numWords = req.data[0]
          .split(" ")
          .filter(a => a.trim().length > 0).length;
        console.log(numWords)
        if (numWords <=4 || numWords > 12 ) {
          return next;
        }
        this.setState({
          quote: req.data
        })
      })
    
  }

  render() {
    return (
      <div className="MediumQuote">
        <button 
        onClick={this.getQuote}
        className="btn btn-primary">
          Get a Medium Quote
        </button>
        <h1 className="orangeText">{this.state.quote}</h1>
      </div>
    )
  }
}
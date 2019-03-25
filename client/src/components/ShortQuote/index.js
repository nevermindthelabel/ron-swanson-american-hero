import React, { Component } from "react";
import axios from "axios";
import "./style.css";

export default class MediumQuote extends Component {
  state = {
    quote: 'Click button. Just do it. Trust me.'
  };

  getQuote = () => {
    axios.get("http://ron-swanson-quotes.herokuapp.com/v2/quotes").then((req, next ) => {
      let numWords = req.data[0].split(" ").filter(a => a.trim().length > 0)
        .length;
      console.log(numWords);
      if (numWords >= 4) {
        return next;
      } else {
        this.setState({
          quote: req.data
        });
      }
    });
  };

  render() {
    return (
      <div className="ShortQuote">
        <button onClick={this.getQuote} className="btn btn-primary">
          Get a Short Quote
        </button>
        <h1 className="whiteText">{this.state.quote}</h1>
      </div>
    );
  }
}

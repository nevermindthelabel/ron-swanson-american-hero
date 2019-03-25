import React, { Component } from "react";
import { FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import "./style.css";

export default class MediumQuote extends Component {
  state = {
    quote: 'Click button for words of wisdom.'
  };

  getQuote = () => {
    axios
      .get("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((req, next) => {
        let numWords = req.data[0].split(" ").filter(a => a.trim().length > 0)
          .length;
        console.log(numWords);
        if (numWords < 13 ) {
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
      <div className="LargeQuote">
        <button onClick={this.getQuote} className="btn btn-primary">
          Get a Large Quote
        </button>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="LargeQuoteRating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <h1 className="limeText">{this.state.quote}</h1>
      </div>
    );
  }
}

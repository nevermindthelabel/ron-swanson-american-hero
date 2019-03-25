import React, { Component } from "react";
import { FormGroup, Label, Input, Row } from "reactstrap";
import axios from "axios";
import "./style.css";

export default class MediumQuote extends Component {
  state = {
    quote: "Click button. Just do it. Trust me.",
    value: 0
  };

  getQuote = () => {
    axios
      .get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((req, next) => {
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

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  onPost = () => {
    axios.post('/api/quotes', function(req) {

    })
  }


  render() {
    return (
      <div className="ShortQuote">
        <Row>
          <button onClick={this.getQuote} className="btn btn-primary align">
            Get a Short Quote
          </button>
          <FormGroup className="align">
            <Label for="exampleSelect">
              <h4>Rate Quote</h4>
            </Label>
            <Input
              type="select"
              name="select"
              value={this.state.value}
              onChange={this.handleChange}
              id="ShortQuoteRating"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
        </Row>
        <h1 className="whiteText">{this.state.quote} Rating: {this.state.value}</h1>
        <button className="btn btn-warning" 
        onClick={this.onPost}
        >Submit quote and Rating to Database</button>
      </div>
    );
  }
}

/*
TODO
get the value of the submitted quote and rating from state to the database.
loop over the total of votes and divide by the length of the array to get the average.
do a get request from the database to display the average quote rating along with the quote.
*/
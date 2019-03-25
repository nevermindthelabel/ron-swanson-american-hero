import React, { Component } from "react";
import { FormGroup, Label, Input, Row } from "reactstrap";
import axios from "axios";
import "./style.css";

export default class MediumQuote extends Component {
  state = {
    quote: "Click button for words of wisdom.",
    value: 0
  };

  getQuote = () => {
    axios
      .get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((req, next) => {
        let numWords = req.data[0].split(" ").filter(a => a.trim().length > 0)
          .length;
        console.log(numWords);
        if (numWords < 13) {
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
    this.setState({
      quote: '',
      value: 0
    })
    axios.post('/api/quotes', function (res) {
        
    })
  }


  render() {
    return (
      <div className="LargeQuote">
        <Row>
          <button onClick={this.getQuote} className="btn btn-primary">
            Get a Large Quote
          </button>
          <FormGroup className="align">
            <Label for="exampleSelect">
              <h4>Rate Quote</h4>
            </Label>
            <Input type="select" name="select" id="LargeQuoteRating">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
        </Row>
        <h1 className="limeText">{this.state.quote} Rating: {this.state.value}</h1>
        <button className="btn btn-warning"
          onClick={this.onPost}
        >Submit quote and Rating to Database</button>
      </div>
    );
  }
}

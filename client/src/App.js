import React, { Component } from 'react';
import MediumQuote from '../src/components/MediumQuote';
import ShortQuote from '../src/components/ShortQuote';
import LargeQuote from '../src/components/LargeQuote';
import Footer from '../src/components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ShortQuote />
        <MediumQuote />
        <LargeQuote />
        <Footer />
      </div>
    );
  }
}

export default App;

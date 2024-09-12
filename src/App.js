import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './styles/global.scss';

class App extends Component {
  render() {
    return (
      <div className="root">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu'


export class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Menu />
      </div>
    );
  }
}

export default App;

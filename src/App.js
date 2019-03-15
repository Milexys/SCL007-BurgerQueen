import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu'
import db from './Firebase.js';


export class App extends Component {
  constructor(){
    super();
    this.handleFood = this.handleFood.bind(this);
  }
  
  handleFood(name, cost){
  const createOrder = {
    item: name,
    price: cost,
    } 
    return console.log(createOrder);

  }

  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Menu items={this.handleFood}/>
      </div>
    );
  }
}

export default App;

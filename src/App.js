import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu'
import Formulario from './components/Formulario.js'
import db from './Firebase.js';


export class App extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
    this.handleFood = this.handleFood.bind(this);
  }
  
  handleFood(name, cost){
  this.setState({
    ...this.state,
    items: this.state.items.concat([{name: name, cost: cost}])
  })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Menu items={this.handleFood}/>
                </div>
                <div className="col-md-6">
                  <div className="jumbotron mt-2">
                          <Formulario order={this.state.items}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

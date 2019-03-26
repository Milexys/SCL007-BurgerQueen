import React, { Component } from 'react';
import Menu from './Menu';
import Formulario from './Formulario.js';
import Kitchen from './Kitchen.js'


export class Waiter extends Component {
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
    );
  }
}

export default Waiter;

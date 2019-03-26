import React, { Component } from 'react';
import ClientMenu from './ClientMenu';
import ClientOrder from './ClientOrder.js';


export class Dashboard extends Component {
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
              <ClientMenu items={this.handleFood}/>
          </div>
          <div className="col-md-6">
            <div className="jumbotron mt-2">
              <ClientOrder order={this.state.items}/>
            </div>
          </div>
      </div>
    );
  }
}

export default Dashboard;

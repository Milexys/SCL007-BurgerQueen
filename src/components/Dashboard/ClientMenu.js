import React, { Component } from 'react';
import { plates } from '../../todo.json'



class ClientMenu extends Component {
  constructor(){
      super()
      this.state = {
          plates,
          toShow : [],
      }
      this.handleBreakfastButton = this.handleBreakfastButton.bind(this);
      this.handleLunchButton = this.handleLunchButton.bind(this);
      this.handleDataFood = this.handleDataFood.bind(this);
  }
  handleBreakfastButton(e){
      e.preventDefault();
      this.setState({
          ...this.state,
          toShow: this.state.plates.filter(plate => {
              return plate.type === "desayuno"
            })
      })
}
handleLunchButton(e){
    e.preventDefault();
    this.setState({
        ...this.state,
        toShow: this.state.plates.filter(plate => {
            return plate.type === "restodia"
        })
    })  
}
handleDataFood(e){
    e.preventDefault();
console.log(this.props.name)
}
    render() {
        return(
            <div className="menu">
                <button className="btn btn-lg btn-warning mt-2" onClick={this.handleBreakfastButton}>Desayuno</button>
                <button className="btn btn-lg btn-warning ml-2 mt-2" onClick={this.handleLunchButton}>Almuerzo y Cena</button>
                    <div className="row">
                    {this.state.toShow.map((plate, i) => {
                        return(
                            <div key={i} className="col-md-4">
                                <button className="btn btn-success btn-lg mt-2" onClick={()=>{
                                    const name = plate.name;
                                    const cost = plate.cost;
                                    this.props.items(name, cost);
                                    }}>
                                            { plate.name } <br/>
                                            ${plate.cost} 
                                </button>
                            </div>
                                )
                            })
                        }
                    </div>
                </div>
        );
    }
}
export default ClientMenu;
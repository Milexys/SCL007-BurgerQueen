import React, { Component } from 'react';
import { plates } from '../todo.json'

class Menu extends Component {
  constructor(){
      super()
      this.state = {
          plates,
          toShow : [],
      }
      this.handleBreakfastButton = this.handleBreakfastButton.bind(this);
      this.handleLunchButton = this.handleLunchButton.bind(this);
  }
  handleBreakfastButton(){
      this.setState({
          ...this.state,
          toShow: this.state.plates.filter(plate => {
              return plate.type === "desayuno"
            })
      })
}
handleLunchButton(){
    this.setState({
        ...this.state,
        toShow: this.state.plates.filter(plate => {
            return plate.type === "restodia"
        })
    })

}

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-lg btn-warning mt-2" onClick={this.handleBreakfastButton}>Desayuno</button>
                        <button className="btn btn-lg btn-warning ml-2 mt-2" onClick={this.handleLunchButton}>Almuerzo y Cena</button>
                        <div className="row">
                        {this.state.toShow .map((plates, i) => {
                            return(
                                    <div key={i} className="col-md-4">
                                        <button className="btn btn-success btn-lg mt-2">
                                            { plates.name } <br/>
                                            ${plates.cost} 
                                        </button>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="jumbotron mt-2">
                            <form>
                                <label for="Client's Name">Nombre del Cliente: </label>
                                <input type="text" className="form-control"/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        );
    }
}
export default Menu;
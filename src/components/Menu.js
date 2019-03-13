import React, { Component } from 'react';

class Menu extends Component {
  
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-lg btn-warning">Desayuno</button>
                        <button className="btn btn-lg btn-warning">Almuerzo</button>
                    </div>
                    <div className="col-md-6">
                        <div className="jumbotron"></div>
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        );
    }
}
export default Menu;
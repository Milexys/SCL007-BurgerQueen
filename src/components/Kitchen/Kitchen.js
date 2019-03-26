import React, { Component } from 'react';


class Kitchen extends Component{
    render(){
        return(
            <div className="row mt-2">
                <div className="col-md-3">
                    <div className="card text-white bg-success mb-3">
                        <div className="card-header">
                            <span className="badge bagde-pill badge-warning mr-2">1</span>
                            Milexys
                        </div>
                        <div className="card-body">
                            <p className="card-text">Hamburguesa de Pollo Doble</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Kitchen;
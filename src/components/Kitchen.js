import React, { Component } from 'react';
import db from '../Firebase.js';

class Kitchen extends Component{
    render(){
        return(
            <div className="row mt-2">
                <div className="col-md-3">
                    <div class="card text-white bg-success mb-3">
                        <div class="card-header">
                            <span className="badge bagde-pill badge-warning mr-2">1</span>
                            Milexys
                        </div>
                        <div class="card-body">
                            <p class="card-text">Hamburguesa de Pollo Doble</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Kitchen;
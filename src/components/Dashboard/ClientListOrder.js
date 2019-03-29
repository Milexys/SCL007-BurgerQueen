import React, { Component } from 'react';

class ClientListOrder extends Component{

    deleteItem = (e) => {
        e.preventDefault()
        alert("no logro eliminarme D:")
    }
    render(){
    return (
        <div>
        {this.props.orderList.map((item, i) => {
            return (
                <div key={i} className="row">
                    <div className="col-md-6">
                        {item.name}
                    </div>
                    <div className="col-md-4">
                        ${item.cost}
                    </div>
                    <div className="col-md-2">
                        <a href="#" onClick={this.deleteItem}>
                            <i className="material-icons">
                            cancel
                            </i>
                        </a>
                    </div>
                </div>
            )
        })}
        </div>
    )
}
}
export default ClientListOrder;
import React, { Component } from 'react';

class ClientListOrder extends Component{
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
                        <a href="#">
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
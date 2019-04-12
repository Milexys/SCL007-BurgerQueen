import React, { Component } from 'react';

class ClientListOrder extends Component{
    render(){
    return (
        <div>
        {this.props.orderList.map((item, index) => {
            return (
                <div key={index} className="row">
                    <div className="col-md-6">
                        {item.name}
                    </div>
                    <div className="col-md-4">
                        ${item.cost}
                    </div>
                    <div className="col-md-2">
                        {/* <a href="#" onClick={() =>{
                           this.props.orderList.splice(index, 1);
                        }}>
                            <i className="material-icons">
                            cancel
                            </i>
                        </a> */}
                    </div>
                </div>
            )
        })}
        </div>
    )
}
}
export default ClientListOrder;
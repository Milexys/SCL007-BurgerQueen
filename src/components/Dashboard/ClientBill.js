import React, { Component } from 'react'

class ClientBill extends Component {
    render(){
    return (
        <div className="row">
            <div className="col-md-12">
                <p className="text-warning text-left">Monto total: ${this.props.orderResult.reduce((accum, currentValue) => {
    return accum + parseInt(currentValue.cost)}, 0)}</p>
            </div>
        </div>
    )
    }   
}

export default ClientBill;
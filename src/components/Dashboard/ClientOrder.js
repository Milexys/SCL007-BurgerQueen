import React, { Component } from 'react';
import ClientOrderList from './ClientListOrder';
import ClientBill from './ClientBill'
import { addOrder } from '../../store/actions/orderActions';
import { connect } from 'react-redux';

class ClientOrder extends Component {
constructor(){
    super();
    this.state = {
        name: "",
        food: [],
        }
    this.handleData = this.handleData.bind(this);
    this.handleChange = this.handleChange.bind(this);
}
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            name: e.target.value,
            food: this.props.order.map(food => {return food.name})
        })
    }
    handleData = (e) => {
        e.preventDefault();
        this.props.addOrder(this.state)
    }
    render(){
        return (
                <form onSubmit={this.handleData}>
                    <label>Nombre del Cliente: </label>
                    <input type="text" className="form-control" onChange={this.handleChange} />
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-info">Items</p>
                        </div>
                        <div className="col-md-4">
                            <p className="text-info">Precio</p>
                        </div>
                        <div className="col-md-2">
                        </div>
                    </div>
                    <ClientOrderList orderList={this.props.order} />
                    <ClientBill orderResult={this.props.order} />
                    <input type="submit" className="btn btn-info mt-2" value="SUBMIT"/>
                </form>
        )
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        addOrder: (order) => dispatch(addOrder(order))
    }
}
export default connect(null, mapDispatchtoProps)(ClientOrder);
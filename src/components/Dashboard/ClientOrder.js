import React, { Component } from 'react';
import ClientOrderList from './ClientListOrder';
import db from '../../Firebase.js';

class ClientOrder extends Component {
    searchRef = React.createRef();
constructor(){
    super();
    this.state = {
        name: "",
    }
    this.handleData = this.handleData.bind(this);
    this.handleChange = this.handleChange.bind(this);
}
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            name: this.searchRef.current.value,
        })
    }
    handleData = (e) => {
        e.preventDefault();
        this.setState({
            name: "",
        })
        db.collection("pedidos").add({
            clientName: this.state.name,
            food: this.props.order
        }).then(() => {
            console.log("enviado");
        })
        .catch(() => {
            console.error("error");
        });
    }
    render(){
        return (
                <form onSubmit={this.handleData}>
                    <label>Nombre del Cliente: </label>
                    <input ref={this.searchRef} type="text" className="form-control" onChange={this.handleChange} />
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
                    <input type="submit" className="btn btn-info mt-2" value="SUBMIT"/>
                </form>
        )
    }
}
export default ClientOrder;
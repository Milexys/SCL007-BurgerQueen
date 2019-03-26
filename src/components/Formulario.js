import React, { Component } from 'react'
import db from '../Firebase.js'

class Formulario extends Component {
    searchRef = React.createRef();
constructor(){
    super();
    this.state = {
        name: "",
        result: "",
    }
    this.handleData = this.handleData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleResult = this.handleResult.bind(this);
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
    handleResult = (e, index) => {
        e.preventDefault();
        this.setState({
            result: this.props.order.reduce((accum, currentValue)=>{
                return accum + currentValue.cost
            }, 0),
        })
        
      
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
                        {this.props.order.map((item, i) => {
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
                    <div className="row">
                        {this.state.result}
                    </div>
                    <input type="submit" className="btn btn-info mt-2" value="SUBMIT"/>
                </form>
        )
    }
}
export default Formulario;
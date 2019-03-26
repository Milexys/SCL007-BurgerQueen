import React, { Component } from 'react'
import db from '../Firebase.js'

class Formulario extends Component {
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
            name: this.searchRef.current.value
        })
    }
    handleData = (e) => {
        e.preventDefault();
        this.setState({
            name: "",
        })
        db.doc("BurguerQueen/pedidos").set({
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
                            {this.props.order.map((item, i) => {
                                return (
                                    <div key={i} className="row">
                                        <div className="col-md-6">
                                            {item.name}
                                        </div>
                                        <div className="col-md-6">
                                            ${item.cost}
                                        </div>
                                </div>
                                )
                            })}
                        
                    
                    
                    <input type="submit" className="btn btn-info mt-2" value="SUBMIT"/>
                    
                </form>
        )
    }
}
export default Formulario;
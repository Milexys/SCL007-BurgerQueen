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
        db.collection("clientes").add({
            clientName: this.state.name,
        }).then(() => {
            console.log("enviado");
        })
        .catch(() => {
            console.error("error");
        });
    }

    render(){
        return (
            <div className="jumbotron mt-2">
                <form onSubmit={this.handleData}>
                    <label>Nombre del Cliente: </label>
                    <input ref={this.searchRef} type="text" className="form-control" onChange={this.handleChange} />
                    <input type="submit" className="btn btn-info mt-2" value="SUBMIT" />
                </form>
            </div>
        )
    }
}
export default Formulario;
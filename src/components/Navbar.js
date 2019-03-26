import React, { Component } from 'react'

class Navbar extends Component {
    render(){
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/home">
                    <img src="https://image.flaticon.com/icons/png/512/123/123278.png" width="30" height="30" className="mr-2" alt=""/>
                    Burger Queen
                </a>
                <div className="form-inline my-2 my-lg-0">
                    <a className="btn btn-success my-2 my-lg-0" href="/kitchen">
                    Cocina
                    <span className="badge bagde-pill badge-light ml-2">
                        1
                    </span>
                    </a>
                </div>
            </nav>
        );
    }
}
export default Navbar;
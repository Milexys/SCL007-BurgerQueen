import React, { Component } from 'react';
import KitchenButton from './KitchenButton';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render(){
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to='/' className="navbar-brand">
                    <img src="https://image.flaticon.com/icons/png/512/123/123278.png" width="30" height="30" className="mr-2" alt=""/>
                    Burger Queen
                </Link>
                <KitchenButton />
            </nav>
        );
    }
}
export default Navbar;
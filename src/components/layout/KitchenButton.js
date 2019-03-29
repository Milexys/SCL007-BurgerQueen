import React from 'react';
import { NavLink } from 'react-router-dom';

const KitchenButton = () => {
    return(
        <div className="form-inline my-2 my-lg-0">
            <NavLink to='/kitchen' className="btn btn-success my-2 my-lg-0">
                Cocina
            </NavLink>
        </div>
    )
}
export default KitchenButton;
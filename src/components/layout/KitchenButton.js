import React from 'react';
import { NavLink } from 'react-router-dom';

const KitchenButton = () => {
    return(
        <div className="form-inline">
            <NavLink to='/kitchen' className="btn btn-success">
                Cocina
            </NavLink>
        </div>
    )
}
export default KitchenButton;
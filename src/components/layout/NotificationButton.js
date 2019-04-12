import React from 'react';
import { NavLink } from 'react-router-dom';

const NotificationButton = () => {
    return(
        <div className="form-inline mr-2">
            <NavLink to='/' className="btn btn-warning">
                Menu
            </NavLink>
        </div>
    )
}
export default NotificationButton;
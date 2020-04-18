import React from 'react';
 
import { NavLink } from 'react-router-dom';
import './Navigation.css'
 
const Navigation = () => {
    return (
       <div className="navbar-basic">
       <strong className="titleText">Tramd19</strong>
        <div className="menus">
            <NavLink to="/rider" className="menuItem">RiderForm</NavLink>
            <NavLink to="/riderList" className="menuItem">RiderList</NavLink>
            <NavLink to="/signin" className="menuItem">OFFICIAL Login</NavLink>
            <NavLink to="/dashboard" className="menuItem">OFFICIAL Dashboard</NavLink>

        </div>
         
           
      </div>
    );
}
 
export default Navigation;
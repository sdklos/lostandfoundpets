import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/add" exact>Add a Lost or Found Pet</NavLink>
    </div>
  )
}

export default NavBar;

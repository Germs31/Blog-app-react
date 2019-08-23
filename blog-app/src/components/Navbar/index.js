import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => 
  <div>
    <NavLink exact to='/'>Home</NavLink>
    <NavLink exact to='/register'>Register</NavLink>
    <NavLink exact to='/profile'>Profile</NavLink>
  </div>


export default Navbar
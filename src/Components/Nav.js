import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
 return (
     <div>
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/art'>Multi-Media Art</NavLink>
         <NavLink to='/kungfu'>Kung Fu</NavLink>
         <NavLink to='/tarot'> Tarot</NavLink>
         <NavLink to='/personaltraining'>Personal Training</NavLink>
         <NavLink to='/yoga'>Yoga</NavLink>
     </div>
 )
}

export default Nav

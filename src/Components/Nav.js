import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Nav.css'

const Nav = () => {
 return (
     <div className='ui segment'>
     <div className='ui justified header'>
         <div className='ui purple header'>
         <NavLink to='/'>Home</NavLink>
         <br></br>
         <NavLink to='/art'>Multi-Media Art</NavLink>
         <br></br>
         <NavLink to='/kungfu'>Kung Fu</NavLink>
         <br></br>
         <NavLink to='/tarot'> Tarot</NavLink>
         <br></br>
         <NavLink to='/personaltraining'>Personal Training</NavLink>
         <br></br>
         <NavLink to='/yoga'>Yoga</NavLink>
         </div>
     </div>
     </div>
 )
}

export default Nav

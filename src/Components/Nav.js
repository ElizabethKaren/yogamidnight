import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Nav.css'

const Nav = () => {
 return (
     <div className='nav-container'>
     <h4>
         <NavLink to='/' className='ui purple header'>Home </NavLink>&nbsp;&nbsp;&nbsp;
         <NavLink to='/posters' className='ui purple header'>PosterArt </NavLink>&nbsp;&nbsp;&nbsp;
         <NavLink to='/drawings' className='ui purple header'>Drawings </NavLink>&nbsp;&nbsp;&nbsp;
         <NavLink to='/art' className='ui purple header'>Multi-Media Art </NavLink>&nbsp;&nbsp;&nbsp;
         <NavLink to='/kungfu' className='ui purple header'>KungFu </NavLink>&nbsp;&nbsp;&nbsp;
         <NavLink to='/tarot' className='ui purple header'>Tarot </NavLink>&nbsp;&nbsp;&nbsp;
         <NavLink to='/personaltraining' className='ui purple header'>Training </NavLink>&nbsp;
         <NavLink to='/yoga' className='ui purple header'>Yoga </NavLink>
     </h4>
     </div>
 )
}

export default Nav

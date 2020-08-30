import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Nav.css'

const Nav = () => {
 return (
     <div className='nav-container'>
     <p className='ui justified header'>
         <NavLink to='/' className='ui purple header'>Home </NavLink>
         <NavLink to='/posters' className='ui purple header'>PosterArt </NavLink>
         <NavLink to='/drawings' className='ui purple header'>Drawing </NavLink>
         <NavLink to='/art' className='ui purple header'>Multi-MediaArt </NavLink>
         <NavLink to='/kungfu' className='ui purple header'>KungFu </NavLink>
         <NavLink to='/tarot' className='ui purple header'>Tarot </NavLink>
         <NavLink to='/personaltraining' className='ui purple header'>Training </NavLink>
         <NavLink to='/yoga' className='ui purple header'>Yoga </NavLink>
     </p>
     </div>
 )
}

export default Nav

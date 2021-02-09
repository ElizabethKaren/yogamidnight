import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Nav.css'

const Nav = () => {
 return (
     <div className='nav-container'>
     <h4>
         <NavLink to='/' className='headerButton'>Home </NavLink>&nbsp;&nbsp;&nbsp;
         <NavLink to='/posters' className='headerButton'>PosterArt </NavLink>&nbsp;&nbsp;&nbsp;
         <NavLink to='/drawings' className='headerButton'>Drawings </NavLink>&nbsp;&nbsp;&nbsp;
         <NavLink to='/art' className='headerButton'>Multi-Media Art </NavLink>&nbsp;&nbsp;&nbsp;
         <NavLink to='/kungfu' className='headerButton'>KungFu </NavLink>&nbsp;&nbsp;&nbsp;
         <NavLink to='/tarot' className='headerButton'>Tarot </NavLink>&nbsp;&nbsp;&nbsp;
         <NavLink to='/personaltraining' className='headerButton'>Training </NavLink>&nbsp;
         <NavLink to='/yoga' className='headerButton'>Yoga </NavLink>
     </h4>
     </div>
 )
}

export default Nav

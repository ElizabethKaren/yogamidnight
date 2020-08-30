import React from 'react'
import ContactMe from './ContactMe'
import '../Styles/HomePage.css'

const HomePage = props => {
 return (
     <div>
         <div className='welcome'>
            <h1 className='ui purple header'>  Welcome To Yoga Midnight</h1>
         </div>
         <div className='ui fluid image'>
         <img src={props.homePageImage} alt='pic' />
         </div>
         <h1 className='ui purple header'><ContactMe/></h1>
     </div>
 )
}

export default HomePage
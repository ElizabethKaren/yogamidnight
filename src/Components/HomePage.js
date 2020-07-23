import React from 'react'

const HomePage = (props) => {
 return (
     <div className='ui grid'>
         <div>
             <div className='ui justified header'>
             <h1 className='ui purple header'>Welcome To Yoga Midnight</h1>
             </div>
         </div>
         <div className='ui huge image'>
         <img src={props.homePageImage} alt='pic' />
         </div>
     </div>
 )
}

export default HomePage
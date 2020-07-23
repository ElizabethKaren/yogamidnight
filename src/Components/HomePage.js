import React from 'react'

const HomePage = (props) => {
 return (
     <div>
         <div>
             <div className='ui justified header'>
             <h1 className='ui purple header'>Welcome To Yoga Midnight</h1>
             </div>
         </div>
         <img src={props.homePageImage} alt='pic' />
     </div>
 )
}

export default HomePage

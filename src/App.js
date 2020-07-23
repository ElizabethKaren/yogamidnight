// import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Nav from './Components/Nav';
import HomePage from './Components/HomePage';
import KungFu from './Components/KungFu';
import PersonalTraining from './Components/PersonalTraining';
import Yoga from './Components/Yoga';
import Tarot from './Components/Tarot';
import MultiMediaArt from './Components/MultiMediaArt';

export class App extends Component {
  
  render(){
    
  return (
    <div className='top-wrap'>
      <Nav/>
      <Switch>
        <Route path='/kungfu' render={()=> <KungFu/>} />
        <Route path='/tarot' render={()=> <Tarot/>} />
        <Route path='/personaltraining' render={() => <PersonalTraining/> } />
        <Route path='/yoga' render={()=> <Yoga />}/>
        <Route path='/art' render={() => <MultiMediaArt/> }/>
        <Route path='/' render={()=> <HomePage/> }/>
      </Switch>
    </div>
   )
  }
}

export default App;

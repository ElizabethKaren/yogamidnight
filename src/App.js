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
    <div>
      <Nav />
      <Switch>
        <Route to='/kungfu' render={()=> <KungFu/>} />
        <Route to='/tarot' render={()=> <Tarot/>} />
        <Route to='/personaltraining' render={() => <PersonalTraining/> }/>
        <Route to='/yoga' render={()=> <Yoga />}/>
        <Route to='/art' render={() => <MultiMediaArt/> }/>
        <Route to='/' render={()=> <HomePage/>}/>
      </Switch>
    </div>
   )
  }
}

export default App;

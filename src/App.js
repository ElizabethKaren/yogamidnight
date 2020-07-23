// import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Nav from './Componenets/Nav'
import HomePage from './Componenets/HomePage'
import KungFu from './Componenets/KungFu'
import MultimediaArt from './Componenets/MultiMediaArt'
import PersonalTraining from './Componenets/PersonalTraining'
import Yoga from './Componenets/Yoga'
import Tarot from './Componenets/Tarot'

export class App extends Component() {
  
  render(){
  return (
    <div>
      <Nav />
      <Switch>
        <Route to='/tarot' render={()=> <Tarot/>} />
        <Route to='/personaltraining' render={() => <PersonalTraining/> }/>
        <Route to='/yoga' render={()=> <Yoga />}/>
        <Route to='/' render={()=> <HomePage/>}/>
      </Switch>
    </div>
   )
  }
}

export default App;

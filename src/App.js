import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import Game from './Game'
import Results from './Results'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Game}/>
        <Route path='/results' component={Results}/>
      </Switch>
    );
  }
}

export default App;

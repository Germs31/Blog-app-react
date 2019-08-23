import React from 'react'
import Login from './Login'
import Register from './Register';
import Profile from './Profile'
import { Route, Switch } from 'react-router-dom'
import './App.css';

class App extends React.Component{



  render(){
    return (
      <div className="App">
        <h1>FAKE TUMBLR</h1>
        <Login/>
      </div>
    );
  }
}

export default App;

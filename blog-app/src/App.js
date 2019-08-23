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
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} logIn={this.logIn}/>}/>
          <Route exact path="/register" render={(props) => <Register {...props} register={this.register}/>}/>
          <Route exact path="/profile" render={(props) => <Profile {...props} userInfo={this.state}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;

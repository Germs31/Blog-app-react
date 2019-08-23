import React from 'react';
import Login from './Login'
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

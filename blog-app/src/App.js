import React from 'react'
import Login from './Login'
import Register from './Register';
import Profile from './Profile'
import Navbar from './components/Navbar'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import './App.css';


class App extends React.Component{
  state={
    username: null,
    email: '',
    image: '',
    loading: true
  }

  logIn = async (loginInfo) => {
    try {
      const loginResponse = await fetch ('http://localhost:8000/user/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(loginInfo),
        header: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await loginResponse.json();

      this.setState(() => {
        return {
          ...parsedResponse.data,
          loading: false
        }
      })

      return parsedResponse

    } catch (err){
      console.log(err)
    }
  }

  register = async (data) => {
    try{
      const registerResponse = await fetch('http://localhost:8000/user/register',{
        method: 'POST',
        credential: 'inculde',
        body: data,
        header: {
          'enctype': 'multipart/form-data'
        }
      })

      const parsedResponse = await registerResponse.json()

      console.log(parsedResponse)

      this.setState({
        ...parsedResponse.data,
        loading: false
      })

      return parsedResponse

    }catch(err){
      console.log(err)
    }
  }

  render(){
    return (
      <div className="App">
        <h1>FAKE TUMBLR</h1>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} logIn={this.logIn}/>}/>
          <Route exact path="/register" render={(props) => <Register {...props} register={this.register}/>}/>
          <Route exact path="/profile" render={(props) => this.state.username ? <Profile {...props} userInfo={this.state}/> : <Redirect to='/' />}/>
        </Switch>
      </div>
    )
  }
}




export default App;

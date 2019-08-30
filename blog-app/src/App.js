import React from 'react'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import Edit from './Edit'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import './App.css';
import EditBlog from './EditBlog';

class App extends React.Component{
  state={
    username: null,
    email: '',
    image: '',
    loading: true,
    userId: 0
  }

  componentDidMount(){
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    if(user){
      this.setState({
        ...user,
        loading:false
      })
    }
  }

  logIn = async (loginInfo) => {
    try {
      const loginResponse = await fetch (`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(loginInfo),
        header: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await loginResponse.json();
      localStorage.setItem("user", JSON.stringify(parsedResponse.data))
      this.setState(() => {
        return {
          ...parsedResponse.data,
          loading: false
        }
      })

      return parsedResponse

    } catch (err){
      alert('wronggg')
      console.log(err)
    }
  }

  register = async (data) => {
    try{
      const registerResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/register`,{
        method: 'POST',
        credential: 'include',
        body: data,
        header: {
          'enctype': 'multipart/form-data'
        }
      })

      const parsedResponse = await registerResponse.json()
      localStorage.setItem("user", JSON.stringify(parsedResponse.data))

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

  updateUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
    this.setState({
      ...user,
      loading: true,
    })
  }

  deleteUser = (user) =>{
    localStorage.clear()
    this.setState({
      username: null,
      email: '',
      image: '',
      loading: true,
      userId: 0
    })
    this.props.history.push('/')
  }
  
  
  render(){
    const user = JSON.parse(localStorage.getItem("user"))
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} logIn={this.logIn}/>}/>

          <Route exact path="/register" render={(props) => <Register {...props} register={this.register}/>}/>

          <Route exact path="/profile" render={(props) => <Profile {...props} userInfo={user}/>}/>

          <Route exact path='/user/:id/edit' render={(props) => <Edit edit={this.edit} {...props} user={this.state} update={this.updateUser} delete={this.deleteUser}/>} />

          <Route exact path='/blog/edit/:id' render={(props) => <EditBlog {...props}/>}/>

        </Switch>
      </div>
    )
  }
}




export default withRouter(App);

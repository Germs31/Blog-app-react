import React from 'react'
import {Link} from 'react-router-dom'

class Login extends React.Component{
    state={
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const login = this.props.logIn(this.state)

        login.then((data) =>{
            if(data.status.message === 'Success'){
                this.props.history.push('/profile')
            } else {
                console.log(data, this.props)
            }
        }).catch((err) => {
            console.log(err)
        })
       
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" onChange={this.handleChange}/>
                <label>Password</label>
                <input type="password" name="password" onChange={this.handleChange}/>
                <button type="submit">Login</button>
                <Link to="/register">Sign Up</Link>
            </form>
        )
    }
}

export default Login
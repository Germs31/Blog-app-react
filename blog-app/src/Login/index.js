import React from 'react'

class Login extends React.Component{
    state={
        username: '',
        password: ''
    }

    handleChange = (e) => {
        console.log(e.target)
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
       
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" />
                <label>Password</label>
                <input type="password" name="password" />
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default Login
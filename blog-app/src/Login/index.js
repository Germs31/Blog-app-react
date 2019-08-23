import React from 'react'

class Login extends React.Component{
    state={
        username: '',
        password: ''
    }
    render(){
        return(
            <form>
                <label>Username:</label>
                <input type="text" name="username"/>
                <label>Password</label>
                <input type="password" name="password"/>
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default Login
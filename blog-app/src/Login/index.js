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

        const login = this.props.logIn(this.state)

        login.then((data) =>{
            if(data.status.message == 'success'){
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
            </form>
        )
    }
}

export default Login
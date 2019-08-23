import React from 'react'

class Register extends Component{
    state={
        username: '',
        email: '',
        password: '',
        image: {}
    }

    handleChange = (e) => {
        if(e.target.name != "image"){
            this.setState({[e.target.name]: e.target.value});
        } else {
            this.setState({image: e.target.files[0]});
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData();
        data.append('file', this.state.image)
        data.append('password', this.state.password)
        data.append('email', this.state.email)
        data.append('username', this.state.username)

        console.log(data.enteries(), '<-- data')
        for ( let pair of data.entries()){
            console.log(pair[0], ', ', pair[1])
        }

        const registerCall = this.props.register(data)

        registerCall.then((data) => {
            if(data.status.message === "success"){
                this.props.history.push('/profile')
            } else {
                console.log(data)
            }
        })
    }

  render(){
      return(
          <form onSubmit={this.handleSubmit}> 
              <label>Username:</label>
              <input type="text" name="username" onChange={this.handleChange}/>
              <label>Email:</label>
              <input type="email" name="email" onChange={this.handleChange}/>
              <label>Password:</label>
              <input type="password" name="password" onChange={this.handleChange}/>
              <label>Image</label>
              <input type="file" name="image" onChange={this.handleChange}/>
          </form>
      )
  }
}

export default Register 
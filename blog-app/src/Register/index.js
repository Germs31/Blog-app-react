import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, GridColumn } from 'semantic-ui-react'


class Register extends React.Component{
    state={
        username: '',
        email: '',
        password: '',
        image: {}
    }

    handleChange = (e) => {
        if(e.target.name !== "image"){
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

        console.log(data.entries(), '<-- data')
        for (let pair of data.entries()){
            console.log(pair[0], ', ', pair[1])
        }

        const registerCall = this.props.register(data)

        registerCall.then((data) => {
            if(data.status.message === "Success"){
                this.props.history.push('/profile')
            } else {
                console.log(data)
            }
        })
    }

  render(){
      return(
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
              <GridColumn style={{ maxWidth: 450 }}>
                <Header as='h2'>
                    <Image src='cf.png' />
                        Register
                </Header>
                <Form onSubmit={this.handleSubmit}>
                    <Segment>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' type='text' name='username' onChange={this.handleChange}/>
                    <Form.Input fluid icon='mail' iconPosition='left' placeholder='Email' type='text' name='email' onChange={this.handleChange}/>                        
                    <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name='password' onChange={this.handleChange}/>
                    <Form.Input fluid icon='file' iconPosition='left' placeholder='image' type='file' name='image' onChange={this.handleChange}/>
                    <Button type="submit">Register</Button>
                    </Segment> 
                </Form>
              </GridColumn>
          </Grid>
      )
  }
}

export default Register 
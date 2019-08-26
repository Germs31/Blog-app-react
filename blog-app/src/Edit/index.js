import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, GridColumn } from 'semantic-ui-react'


class Edit extends React.Component{
    state={
        username: '',
        email: '',
        password: '',
        image: {} 
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    // handleSubmit = async (e) => {
    //     try{
    //         const updatedUser = await fetch(`http://localhost:8000/user/${this.props.match.params.id}/edit`, {
    //             method: 'PUT',
    //             credential: 'inculde',
    //             body: JSON.stringify(this.state),
    //             header: {
    //             'enctype': 'multipart/form-data'
    //             }
    //         })
    //         const parsedUser = await updatedUser.json()
    //         console.log(parsedUser)
    
    //         this.setState({
    //             ...parsedResponse.data,
    //             loading: false
    //           })
        
    //           return parsedResponse
    //     }catch(err){
    //         console.log(err)
    //     }
    
    // }
      
    

    // handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const login = this.props.edit(this.state)

    //     login.then((data) =>{
    //         if(data.status.message === 'Success'){
    //             this.props.history.push('/profile')
    //         } else {
    //             console.log(data, this.props)
    //         }
    //     }).catch((err) => {
    //         console.log(err)
    //     })
       
    // }

    render(){
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
              <GridColumn style={{ maxWidth: 450 }}>
                <Form onSubmit={this.handleSubmit}>
                    <Segment>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' type='text' name='username' onChange={this.handleChange}/>
                    <Form.Input fluid icon='mail' iconPosition='left' placeholder='Email' type='text' name='email' onChange={this.handleChange}/>                        
                    <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name='password' onChange={this.handleChange}/>
                    <Form.Input fluid icon='file' iconPosition='left' placeholder='image' type='file' name='image' onChange={this.handleChange}/>
                    <Button type="submit">Edit</Button>
                    </Segment> 
                </Form>
              </GridColumn>
          </Grid>
        )
    }
}

export default Edit

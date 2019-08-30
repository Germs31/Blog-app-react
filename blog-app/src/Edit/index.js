import React from 'react'
import { Button, Form, Grid, Segment, GridColumn, Input } from 'semantic-ui-react'


class Edit extends React.Component{
    state={
        username: '',
        email: '',
    }
    
    async componentDidMount(){
        console.log('componentdm hitting')
        const getResponse =  await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/${this.props.match.params.id}`)

        const parsedJson =  await getResponse.json()
        console.log(parsedJson,'THIS IS PARSED JSON DATAAAA FOR GETTTING USER!!!')

        this.setState({
            ...parsedJson.data
          })
    
          
    }
    
    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    delete = async(id) =>{
        const deleteResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/${this.props.match.params.id}`,{
            method:"DELETE"
        })
        const parsedResponse = await deleteResponse.json()
        console.log(parsedResponse)
        if (parsedResponse.status.message === "resource deleted"){
            this.props.delete()
        }

    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const updatedUser = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/${this.props.match.params.id}`, {
                method: 'PUT',
                credential: 'inculde',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            const parsedJson = await updatedUser.json()
            console.log(parsedJson,'<_________ from edit handleS')
            if (parsedJson.status.message === "success"){
                this.props.update(parsedJson.data)
                this.props.history.push("/profile")
            }
            console.log('HITTTTINGGGG')

        }catch(err){
            console.log(err)
        }
    
    }
      
    

  

    render(){
        console.log(this.props.user)
        
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
              <GridColumn style={{ maxWidth: 450 }}>
                <Form onSubmit={this.handleSubmit}>
                    <Segment>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
                    <Form.Input fluid icon='mail' iconPosition='left' placeholder='Email' type='text' name='email' onChange={this.handleChange} value={this.state.email}/>                        
                    <Button type="submit">Edit</Button>
                    <Button onClick={()=>{this.delete()}} type="button">Delete</Button>
                    </Segment> 
                </Form>
              </GridColumn>
          </Grid>
        )
    }
}

export default Edit

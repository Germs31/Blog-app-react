import React from 'react'
import {Link} from 'react-router-dom'
import { 
    Form, 
    Grid, 
    Header, 
    Image, 
    Message, 
    Segment, 
    GridColumn,
    Button 
} from 'semantic-ui-react'


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
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <GridColumn style={{ maxWidth: 450 }}>
                    <Header as='h1'>Boiling Mountains</Header>
                    <Header as='h2'>
                    <Image src='cf.png' />
                        Lets Login In
                    </Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Segment>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' type='text' name='username' onChange={this.handleChange}/>
                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name='password' onChange={this.handleChange}/>
                        <Button color="vk" fluid size='large'>
                            Login
                        </Button>
                        <Message>
                            Not a member? <Link to='/register'>Register</Link>
                        </Message>
                        </Segment>
                    </Form>
                </GridColumn>
            </Grid>
        )
    }
}

export default Login
import React from 'react'
import {Button, 
        Form, 
        Grid, 
        Header, 
        Image,
        Container,
        GridColumn,
        Segment,
        TextArea} 
        from 'semantic-ui-react';
import BlogList from '../BlogList/index'
import BlogEdit from '../EditBlog/index'
import EditBlog from '../EditBlog/index';


class Blog extends React.Component{
    state = {
    title: '',
    author: '',
    text: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
    
        const registerResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/blog/v1/`,{
            method: 'POST',
            credential: 'include',
            body: JSON.stringify(this.state),
            header: {
              'Content-Type': 'application/json'
            }
          })

        const parsedJson = await registerResponse.json()
        console.log(parsedJson,'THIS IS PARSED JSON DATAAAA!!!')

        this.setState({
            ...parsedJson.data
          })
    
          return parsedJson
    }



    render(){
        return(
            <Container fluid>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <GridColumn style={{ maxWidth: 450 }}>
                        <Header as='h2'>
                            <Image src='cf.png' />
                                CREATE A BLOG
                        </Header>
                        <Form onSubmit={this.handleSubmit}>
                            <Segment>
                            <Form.Input placeholder='title of blog' type='text' name='title' onChange={this.handleChange}/>
                            <Form.Input placeholder='author of blog' type='text' name='author' onChange={this.handleChange}/>                        
                            <TextArea placeholder='blog' type='text' name='text' onChange={this.handleChange}/>
                            <Button type="submit">create</Button>
                            </Segment> 
                        </Form>
                    </GridColumn>
                </Grid>
                <div>
                    <BlogList/>
                    
                </div>
            </Container>
        )
    }
}

export default Blog


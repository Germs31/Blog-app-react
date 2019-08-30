import React from 'react'
import { 
    Button, 
    Form,
    Grid, 
    GridColumn,
    Segment,
    Header, 
    Image,
    TextArea
} from 'semantic-ui-react';


class EditBlog extends React.Component{
    state = {
        title:'',
        author:'',
        text:''
    }

    async componentDidMount(){
        const datBlog = await fetch(`${process.env.REACT_APP_BACKEND_URL}/blog/v1/${this.props.match.params.id}`)
        const parsed = await datBlog.json()
        this.setState({
            ...parsed.data
        })
    }
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const editedResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/blog/v1/${this.props.match.params.id}`,{
            method: 'PUT',
            credential: 'include',
            body: JSON.stringify(this.state),
            headers: {
              'Content-Type': 'application/json'
            }
          })

        const parsedJson = await editedResponse.json()
        console.log(parsedJson)
        if (parsedJson.status.message === "success"){
            this.props.history.push("/profile")
        }
    }


    render(){
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <GridColumn style={{ maxWidth: 450 }}>
                    <Header as='h2'>
                        <Image src='cf.png'/>
                            Edit Blog
                    </Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Segment>
                        <Form.Input placeholder='title of blog' type='text' name='title' onChange={this.handleChange} value={this.state.title}/>
                        <Form.Input placeholder='author of blog' type='text' name='author' onChange={this.handleChange} value={this.state.author}/>                        
                        <TextArea placeholder='blog' type='text' name='text' onChange={this.handleChange} value={this.state.text}/>
                        <Button type="submit">Edit</Button>
                        </Segment> 
                    </Form>
                </GridColumn>
            </Grid>
        )
    }
}

export default EditBlog 
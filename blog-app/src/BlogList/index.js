import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Button} from 'semantic-ui-react'
import {Blogs} from './style'



class BlogList extends React.Component{
    state = {
        blogs: []
    }
   async componentDidMount(){
        const getResponse =  await fetch(`${process.env.REACT_APP_BACKEND_URL}/blog/v1/`)

        const parsedJson =  await getResponse.json()
        console.log(parsedJson,'THIS IS PARSED JSON DATAAAA FOR GETTTING BLOGS!!!')

        this.setState({
            blogs: [...parsedJson.data]
          })
    
          return parsedJson
    }

    delete = async(id) =>{
        const deleteResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/blog/v1/${id}`,{
            method:"DELETE"
        })
        const parsedResponse = await deleteResponse.json()
        console.log(parsedResponse)
        if (parsedResponse.status.message === "resource deleted"){
            console.log('deteled')
            this.setState({
                blogs: [...this.state.blogs].filter(b =>{
                    return b.id !== id
                })
            })
        }

    }


    render(){
        return(
            <div>
                {
                    this.state.blogs.map((b, i)=>{
                        return (
                            <Container fluid>
                                <Blogs>
                                    <div key={i} style={{border: '1px solid black', margin:"5px"}}>
                                        <h1>{b.title}</h1>
                                        <h3> by: {b.author}</h3>
                                        <p>{b.text}</p>
                                        <Link to={`/blog/edit/${b.id}`}>
                                            <Button type="button">
                                                Edit
                                            </Button>
                                        </Link>
                                        <Button onClick={()=>{this.delete(b.id)}}>Delete</Button>
                                    </div>
                                </Blogs>
                            </Container>
                        )
                    })
                }
            </div>
        )
    }
}


export default BlogList 
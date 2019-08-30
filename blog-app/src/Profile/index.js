import React from 'react'
import Blog from '../Blog/index'
import { Button,Container} from 'semantic-ui-react';
import { Link,Redirect } from 'react-router-dom'
import { Div, Img } from './style'





class Profile extends React.Component{
    state={
        id: 1,
        email: '',
        image: '',
        username: ''
    }

    logOut = () =>{
        localStorage.clear();
        window.location.href = '/';
        
    }
    


    render(){
        return(
            <Container fluid>
                <Div>
                <h1>Blogs</h1>
                    
                {!this.props.userInfo.username && <Redirect to="/"/>}
                
                    {
                    this.props.userInfo.loading ?
                    'Loading.....' :
                    <div>
                        <Img src={`${process.env.REACT_APP_BACKEND_URL}/profile_pics/${this.props.userInfo.image}`} />
                        <h3>Welcome, {this.props.userInfo.username}</h3>
                        <Link to={`/user/${this.props.userInfo.id}/edit`}>
                            <Button>Edit</Button>
                        </Link>
                        <Button onClick={()=>this.logOut()} type="button">Log Out</Button>
                    </div>
                    }

                </Div>
                <Blog />

            </Container>
        )
    }
}

export default Profile
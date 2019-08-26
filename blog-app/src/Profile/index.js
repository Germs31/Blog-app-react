import React from 'react'
import { Grid, Image, Header} from 'semantic-ui-react'
import {Link} from 'react-router-dom'



class Profile extends React.Component{
    state={
        id: 1,
        email: '',
        image: '',
        username: ''
    }

    render(){
        console.log(this.state, this.props.userInfo)
        return(
            <div>
                <h1>{this.props.userInfo.username}</h1>
                <h3>{this.props.userInfo.email}</h3>
                <Link to='/create-blog'/>
            </div>
        )
    }
}

export default Profile
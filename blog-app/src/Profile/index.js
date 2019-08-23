import React from 'react'

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
            <h1>Welcome, {this.props.userInfo.username}</h1>
        )
    }
}

export default Profile
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
            <Grid columns={2} padded style={{ height: '100vh'}}>
                <Grid.Row>
                <Grid.Column width={4}>
                    {
                    this.props.userInfo.loading ?
                    'Loading.....' :

                    <Card
                        image={`${process.env.REACT_APP_BACKEND_URL}/profile_pics/${this.props.userInfo.image}`}
                        header={this.props.username}
                        meta={this.props.email}
                        description='coding is bitter sweet'
                        style={{'marginLeft': '8vw'}}
                        />
                    }
                </Grid.Column>
                <Grid.Column width={8}>
                    <Header as='h2' textAlign='center'>
                    {this.props.userInfo.username}'s Blogs
                    </Header>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Profile
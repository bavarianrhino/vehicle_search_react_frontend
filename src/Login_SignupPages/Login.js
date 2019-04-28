import React from 'react';
import { getAuthToken } from '../Services/Fetches';
import { setCurrentUser } from '../Actions/AllActions';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import { connect } from 'react-redux';



class Login extends React.Component {
    
	state = {
		username: '',
        password: '',
        errors: []
	};

	handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    
    handleSubmit = (e) => {
        e.preventDefault();

        getAuthToken({ username: this.state.username, password: this.state.password})
            .then(payload => {
                if(payload.error) {
                    this.setState({ errors: payload.error })
                } else {
                    this.props.setCurrentUser(payload.user.id);
                    // localStorage.setItem('user', payload.user.id)
                    localStorage.setItem('token', payload.jwt);
                    this.props.history.push('/')
                }
            })

        e.target.reset();
    }

    handleReset = () => {
        this.setState({
			username: '',
			password: '',
			errors: []
		});
    }

	render() {
		return (
			<div>
				<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as='h2' color='teal' textAlign='center'>
							<Image src='/logo.png' /> Log-in to your account
						</Header>

						<Form size='large' onSubmit={this.handleSubmit} onReset={this.handleReset} >
							<Segment stacked>
								<Form.Input fluid icon='user' iconPosition='left' autoComplete='off' placeholder='Username' name='username' onChange={this.handleChange} />
								<Form.Input fluid icon='lock' iconPosition='left' autoComplete='off' placeholder='Password' type='password' name='username' onChange={this.handleChange} />
								<Button color='teal' fluid size='large' type='submit'>Login</Button>
							</Segment>
						</Form>
                        {this.state.errors ? (<Message attached error header="There were errors with your submission:" list={this.state.errors}/>) : null }


					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

export default connect(null, {setCurrentUser})(Login);
						// <Message>
						// 	New to us? <a href='#'>Sign Up</a>
						// </Message>
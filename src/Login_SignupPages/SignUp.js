import React from 'react';
import { signUpNewUser } from '../Services/Fetches';
import { setCurrentUser } from '../Actions/AllActions';
import { connect } from 'react-redux';

import { Button, Form, Grid, Header, Image, Message } from 'semantic-ui-react';


// import { } from 'semantic-ui-react';


class SignUp extends React.Component {
    
	state = {
        username: '',
        password: '',
        password_confirmation: '',
        error: null
	};

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        signUpNewUser({ user: { username: this.state.username, password: this.state.password, password_confirmation: this.state.password_confirmation } })
            .then((payload) => {
                console.log(payload)
                if (payload.user) {
                    localStorage.setItem('token', payload.jwt);
                    this.props.history.push('/');
                    this.props.setCurrentUser(payload.user.id);
                    // getFavorites()
                } else {
                    this.setState({ error: payload.error });
                }
            })
        e.target.reset();
    }

    handleReset = () => {
        this.setState({
			username: '',
			password: '',
			password_confirmation: '',
			error: null
		});
    }

	render() {
		return (
			<div>
				<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as='h2' color='teal' textAlign='center'>
							<Image src='/logo.png' /> Sign Up!
						</Header>

						<Form size='large' onSubmit={this.handleSubmit} onReset={this.handleReset}>
							<Form.Input fluid icon='user' iconPosition='left' autoComplete='off' placeholder='Username...' type='text' name='username' onChange={this.handleChange} />
							<Form.Input fluid icon='lock' iconPosition='left' autoComplete='off' placeholder='Password...' type='password' name='password' onChange={this.handleChange} />
							<Form.Input fluid icon='lock' iconPosition='left' autoComplete='off' placeholder='Confirm Password...' type='password' name='password_confirmation' onChange={this.handleChange} />
							<Button color='teal' fluid size='large' type='submit'>
								Sign Up!
							</Button>
						</Form>

						{this.state.error ? <Message attached error header='There was an error with your submission:' list={this.state.error} /> : null}

					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

export default connect(null, {setCurrentUser})(SignUp);
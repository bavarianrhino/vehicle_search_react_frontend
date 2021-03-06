import React from 'react';
import { signUpNewUser } from '../Actions/LoginSignUpActions';
import { setCurrentUser } from '../Actions/LoginSignUpActions';
import { connect } from 'react-redux';

import { Segment, Container, Button, Form, Grid, Header, Image, Message } from 'semantic-ui-react';


class SignUp extends React.Component {
    
	state = {
        username: '',
        password: '',
        password_confirmation: '',
        error: null
	};

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        signUpNewUser({ user: { username: this.state.username, password: this.state.password, password_confirmation: this.state.password_confirmation } })
            .then((payload) => {
                // console.log(payload)
                if (payload.user) {
                    localStorage.setItem('token', payload.jwt);
                    this.props.history.push('/');
                    this.props.setCurrentUser(payload.user.id);
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
				<Segment vertical style={{ margin: '4.4em 0em 0em', padding: '5em 0em' }}>
					<Container textAlign='center' style={{ background: 'url(../../Images/vwBusDesert.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
						<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
							<Grid.Column style={{ maxWidth: 450 }}>

								<Header as='h2' color='teal' textAlign='center'>
									<Image src={require(`../Images/e34reariconBlack.png`)} /> Sign Up!
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
								
								<Message>
									Already Have An Account? <a href='https://bavarianrhino.github.io/vehicle_search_react_frontend/#/login'>Login</a>
								</Message>
                                
							</Grid.Column>
						</Grid>
					</Container>
				</Segment>
			</div>
		);
	}
}

export default connect(null, {setCurrentUser})(SignUp);
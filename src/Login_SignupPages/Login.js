import React from 'react';

import { connect } from 'react-redux';
import { getAuthToken } from '../Actions/LoginSignUpActions';
import { setCurrentUser } from '../Actions/LoginSignUpActions';

import { Segment, Container, Button, Form, Grid, Header, Image, Message, Loader, Dimmer } from 'semantic-ui-react';

class Login extends React.Component {

	state = {
		username: '',
		password: '',
		error: null
	};

	handleChange = (e) => {
		// console.log(e.target.value)
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		getAuthToken({ user: { username: this.state.username, password: this.state.password } }).then((payload) => {
			// console.log(payload);
			if (payload.user) {
				localStorage.setItem('token', payload.jwt);
				this.props.history.push('/');
                this.props.setCurrentUser(payload.user.id)
                    // .then(console.log);
			} else {
				this.setState({ error: payload.error });
			}
        });
        
		// Use below dispatch if above setCurrentUser gets bugs
		// .then((res) => {this.props.fetchFavorites(res).then(console.log)})
		e.target.reset();
	};

	handleReset = () => {
		this.setState({
			username: '',
			password: '',
			error: null
		});
	};

	render() {
        return (
			<div>
                {this.props.geo_loading ? <Dimmer active> <Loader size='big'>Finding Location</Loader></Dimmer> : null}
				<Segment vertical style={{ margin: '11.4em 0em 0em', padding: '5em 0em' }}>
					<Container textAlign='center' style={{ background: 'url(../../Images/vwBusDesert.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
						<Grid textAlign='center' style={{ height: '100%', verticalAlign: 'middle' }}>
							<Grid.Column style={{ maxWidth: 450 }}>

								<Header as='h2' color='black' textAlign='center'>
									<Image src={require(`../Images/e34reariconBlack.png`)} /> Auto Pasture Log In
								</Header>

								<Form size='large' onSubmit={this.handleSubmit} onReset={this.handleReset}>
									<Form.Input color='white' fluid icon='user' iconPosition='left' autoComplete='off' placeholder='Username' type='text' name='username' onChange={this.handleChange} />
									<Form.Input fluid icon='lock' iconPosition='left' autoComplete='off' placeholder='Password' type='password' name='password' onChange={this.handleChange} />
									<Button color='green' fluid size='large' type='submit'>
										Login
									</Button>
								</Form>

								{this.state.error ? <Message attached error header='There was an error with your submission:' list={this.state.error} /> : null}

								<Message>
									Need An Account? <a href='/signup'>Sign Up</a>
								</Message>
                                
							</Grid.Column>
						</Grid>
					</Container>
				</Segment>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
        api_urls: state.favorites.api_urls,
        geo_loading: state.user.loading
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (data) => setCurrentUser(data)(dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
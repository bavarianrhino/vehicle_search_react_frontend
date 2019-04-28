import React from 'react';
import ProjectComponent from './';

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

    }

	render() {
		return (
			<div>
				<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as='h2' color='teal' textAlign='center'>
							<Image src='/logo.png' /> Log-in to your account
						</Header>

						<Form size='large' onSubmit={this.handleSubmit}>
							<Segment stacked>
								<Form.Input fluid icon='user' iconPosition='left' autoComplete='off' placeholder='Username' name='username' onChange={this.handleChange} />
								<Form.Input fluid icon='lock' iconPosition='left' autoComplete='off' placeholder='Password' type='password' name='username' onChange={this.handleChange} />
								<Button color='teal' fluid size='large' type='submit'>Login</Button>
							</Segment>
						</Form>
                        {this.state.errors ? (<Message attached error header="There were erros with your submission:" list={this.state.errors}/>) : null }

						<Message>
							New to us? <a href='#'>Sign Up</a>
						</Message>

					</Grid.Column>
				</Grid>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
    return {
        attr: state.attr
    }
}

const mapDispatchToProps = (dispatch) => ({
    functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

    export default connect(mapStateToProps, mapDispatchToProps)(Login);
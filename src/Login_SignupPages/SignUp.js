import React from 'react';
import ProjectComponent from './';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';


class SignUp extends React.Component {

	state = {
		username: '',
        password: '',
        password_confirmation: ''
	};

	funcName = (e) => {
		console.log(e.target.value);
	};

	render() {
		return (
			<div>
				{this.funcName}
				<ProjectComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
import React from 'react';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';
import ProjectComponent from './';


class Login extends React.Component {
    
	state = {
		username: '',
		password: ''
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
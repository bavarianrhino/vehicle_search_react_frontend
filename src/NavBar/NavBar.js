import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Image, Menu } from 'semantic-ui-react';
class NavBar extends React.Component {
	state = {
		attr: null
	};

	funcName = (e) => {
		console.log(e.target.value);
	};

	render() {
		return (
			<div>
				<Menu fixed='top' inverted>
					<Container>
						<Menu.Item as='' header>
							<Image size='tiny' src={require(`../Images/e34RearIconWhite.png`)} style={{ marginRight: '1.5em' }} />
							Auto Woke
						</Menu.Item>
						<Menu.Item as=''>Searcher</Menu.Item>
						<Menu.Item as=''>Values</Menu.Item>
						<Link to='/login'><Menu.Item as=''>Favorites</Menu.Item></Link>

						<Menu.Menu position='right'>
							<Link to='/login' onClick={() => localStorage.clear()} style={{ display: 'flex' }}>
								<Menu.Item as=''>Log Out</Menu.Item>
							</Link>
						</Menu.Menu>
					</Container>
				</Menu>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		attr: state.attr
	};
};

const mapDispatchToProps = (dispatch) => ({
	functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

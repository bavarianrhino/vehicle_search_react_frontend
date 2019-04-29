import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';

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
						<Menu.Item as='a' header>
							<Image size='tiny' src={require(`../Images/e34RearIconWhite.png`)} style={{ marginRight: '1.5em' }} />
							Auto Woke
						</Menu.Item>
						<Menu.Item as='a'>Searcher</Menu.Item>
						<Menu.Item as='a'>Values</Menu.Item>
						<Menu.Item as='a'>Favorites</Menu.Item>

						<Menu.Menu position='right'>
							<Link to='/login' onClick={() => localStorage.clear()} style={{ display: 'flex' }}>
								<Menu.Item as='a'>Log Out</Menu.Item>
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavBar);
{
	/* <Image size='tiny' src={require(`../Images/e34headericon.png`)} style={{ marginRight: '1.5em' }} />; */
}

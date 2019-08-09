import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Image, Menu } from 'semantic-ui-react';

class NavBar extends React.Component {

	state = {
		activePage: 0
	};

	changeActiveTab = (e) => {
        console.log(e.target.value);
	};

	render() {
		return (
			<div>
				<Menu fixed='top' inverted>
					<Container>
						<Menu.Item as='' header>
							<Image size='tiny' src={require(`../Images/e34RearIconWhite.png`)} style={{ marginRight: '1.5em' }} />
							Auto Pasture
						</Menu.Item>
						<Link to='/' onClick={() => this.props.handleActiveTab(this.state.activePage)} style={{ display: 'flex' }}>
							<Menu.Item>Search</Menu.Item>
						</Link>
						<Link to='/favorites' style={{ display: 'flex' }}>
							<Menu.Item style={{ display: 'flex' }}>Favorites</Menu.Item>
						</Link>

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
        activeTab: state.user.activeTab
	};
};

const mapDispatchToProps = (dispatch) => ({
    handleActiveTab: (data) => dispatch({ type: 'CHANGE_ACTIVE_PAGE', data })
});
// import { fetchNewCarsForSale } from '../../Actions/NewCarsActions';
// fetchNewCarsForSale: (data) => fetchNewCarsForSale(data)(dispatch),

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);



// changeActivePage
// activePage: 0,
// let location = {
// lat: this.props.latitude,
// long: this.props.longitude,
// activeStart: this.state.activeStart,
// render_option: this.state.render_option,
// miles: '200'
// activePage: state.new_cars.page_count,
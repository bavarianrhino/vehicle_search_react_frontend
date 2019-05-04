import React from 'react';
import NavBar from '../../NavBar/NavBar';
import FavCarsForSaleContainer from './FavCarsForSaleContainer';
import FavCarValuesContainer from './FavCarValuesContainer';

import { fetchFavorites } from '../../Actions/FavoritesActions'
import { landFavorites } from '../../Actions/FavoritesActions';
import { connect } from 'react-redux';

import { Segment, Container, Tab } from 'semantic-ui-react';


class Favorites extends React.Component {
	state = {
		attr: null
	};

	// componentDidMount() {
	// 	this.props.fetchFavorites().then(console.log);
	// }
    
	// componentDidUpdate() {
    //     console.log(this.props.api_urls)
    //     this.props.landFavorites(this.props.api_urls).then(console.log);
	// }

	render() {
		const panes = [
			{
				menuItem: 'Favorite Cars',
				render: () => (
					<Tab.Pane attached={false}>
						<FavCarsForSaleContainer />
					</Tab.Pane>
				)
			},
			{
				menuItem: 'Saved Car Value Stats',
				render: () => (
					<Tab.Pane attached={false}>
						<FavCarValuesContainer />
					</Tab.Pane>
				)
			}
		];

		return (
			<div>
				<NavBar />
				<Segment vertical style={{ margin: '4.4em 0em 0em', padding: '5em 0em' }}>
					                    
					<Container textAlign='center'>
						<Tab menu={{ color: 'teal', secondary: true, pointing: true }} panes={panes} />
					</Container>
				</Segment>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
    return {
        // api_urls: state.favorites.api_urls
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchFavorites: (data) => fetchFavorites(data)(dispatch),
        // landFavorites: (data) => landFavorites(data)(dispatch)
		// openModal: (current) => dispatch(openModal(current))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
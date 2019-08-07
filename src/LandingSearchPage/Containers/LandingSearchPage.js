import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SearcherContainer from './SearcherContainer';
import ResultsContainer from './ResultsContainer';

import { connect } from 'react-redux';
import { landFavorites } from '../../Actions/FavoritesActions';

import { Container, Segment } from 'semantic-ui-react';

class LandingSearchPage extends React.Component {

    componentDidMount (){

        // Try to implement with a 1 second delayed api call 
        // this.props.landFavorites(this.props.api_urls)
    }

	render() {
		return (
			<div>
				<NavBar />
				<Segment vertical style={{ margin: '4.4em 0em 0em', padding: '5em 0em' }}>
					<Container textAlign='center' style={{ background: 'url(../../Images/vwBusDesert.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
						<SearcherContainer />
						<ResultsContainer />
					</Container>
				</Segment>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		api_urls: state.favorites.api_urls,
		favorites: state.favorites.favorites
	};
};

const mapDispatchToProps = (dispatch) => ({
    landFavorites: (data) => landFavorites(data)(dispatch)
});



export default connect(mapStateToProps,mapDispatchToProps)(LandingSearchPage);

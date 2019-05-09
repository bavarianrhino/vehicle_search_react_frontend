import React from 'react';
import NavBar from '../../NavBar/NavBar';
import FavCarsForSaleContainer from './FavCarsForSaleContainer';
import FavCarValuesContainer from './FavCarValuesContainer';

import { landFavorites } from '../../Actions/FavoritesActions';
// import { carMakes }from '../../Data/CarModelData'
import { connect } from 'react-redux';

import { Segment, Container, Tab } from 'semantic-ui-react';


class Favorites extends React.Component {

	state = {
        activeIndex: null,
        fetch_load: true,
		loading: true
    };

    componentDidMount(){
        this.props.landFavorites(this.props.api_urls).then((res) => {
			this.setState({ ...this.state, fetch_load: false, loading: false });
		});
    }

	handleTabChange = (e, data) => {
        console.log(data)
		this.setState({ activeIndex: data.activeIndex, loading: !this.state.loading })
    }

	panes = [{menuItem: 'Favorite Cars', render: () => (<Tab.Pane attached={false} loading={this.state.loading}><FavCarsForSaleContainer /></Tab.Pane>)},
            {menuItem: 'Saved Car Value Stats', render: () => (<Tab.Pane attached={false}><FavCarValuesContainer /></Tab.Pane>)}];

	render() {

		return (
			<div>
				<NavBar />
				<Segment vertical style={{ margin: '4.4em 0em 0em', padding: '5em 0em' }}>	                    
					<Container textAlign='center'>
						{!this.state.fetch_load ? <Tab menu={{ color: 'teal', secondary: true, pointing: true }} panes={this.panes} activeIndex={this.activeIndex} onTabChange={(e, data) => {this.handleTabChange(e, data);}}/> : null}
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        landFavorites: (data) => landFavorites(data)(dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
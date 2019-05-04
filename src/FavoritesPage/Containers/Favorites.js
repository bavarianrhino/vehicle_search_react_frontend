import React from 'react';
import NavBar from '../../NavBar/NavBar';
import FavCarsForSaleContainer from './FavCarsForSaleContainer';
import FavCarValuesContainer from './FavCarValuesContainer';

// import { fetchFavorites } from '../../Actions/FavoritesActions'
import { landFavorites } from '../../Actions/FavoritesActions';
import { carMakes }from '../../Data/CarModelData'
import { connect } from 'react-redux';

import { Segment, Container, Tab } from 'semantic-ui-react';


class Favorites extends React.Component {

	state = {
		activeIndex: null,
		loading: false
	};

	handleTabChange = (e, data) => {
		this.setState({ activeIndex: data.activeIndex, loading: !this.state.loading });
        this.props.landFavorites(this.props.api_urls)
        .then((res) => {this.setState({ loading: !this.state.loading })})
        // .then((res) => {this.mapFavs(res)})
        // this.setState({ loading: !this.state.loading })
		}

	// handleRangeChange = (e) => this.setState({ activeIndex: e.target.value, loading: !this.state.loading });

	mapFavs = (res) => {
        // this.props.favorites.map((res) => {
        //     console.log(res)
        // })
		// this.props.landFavorites(this.props.api_urls)
		// .then((res) => {this.setState({ loading: false})})
		// .then((res) => {
		//     return this.props.favorites.favorites.map(fav => fav)
		// })
	};

	mapVaLs = () => {
		return carMakes.makes.map((m) => {
			console.log(m.value);
		});
	};

	// handleClick = (e, data) => {
	//     console.log(data.activeIndex)
	//     console.log(this.panes[0].activeIndex)
	//     let vsome = this.panes.find((ele, i) => {
	//         return ele.activeIndex === data.activeIndex
	//     })
	//     console.log(vsome)
	// }

	panes = [
		{
			menuItem: 'Favorite Cars',
			render: () => (
				<Tab.Pane attached={false} loading={this.state.loading}>
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

	render() {
		// const panes = [
		// 	{
		//         menuItem: 'Favorite Cars',
		//         activeIndex: 0,
		// 		render: () => (
		// 			<Tab.Pane attached={false}>
		// 				<FavCarsForSaleContainer />
		// 			</Tab.Pane>
		// 		)
		// 	},
		// 	{
		//         menuItem: 'Saved Car Value Stats',
		//         activeIndex: 1,
		// 		render: () => (
		// 			<Tab.Pane attached={false}>
		// 				<FavCarValuesContainer />
		// 			</Tab.Pane>
		// 		)
		// 	}
		// ];

		return (
			<div>
				<NavBar />
				<Segment vertical style={{ margin: '4.4em 0em 0em', padding: '5em 0em' }}>
					                    
					<Container textAlign='center'>
						<Tab
							menu={{ color: 'teal', secondary: true, pointing: true }}
							panes={this.panes}
							activeIndex={this.activeIndex}
							onTabChange={(e, data) => {
								this.handleTabChange(e, data);
							}}
						/>
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
        // fetchFavorites: (data) => fetchFavorites(data)(dispatch),
        landFavorites: (data) => landFavorites(data)(dispatch)
		// openModal: (current) => dispatch(openModal(current))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
import React from 'react';
import ViewCarSaleModal from '../../LandingSearchPage/Components/ViewCarSaleModal';
import { connect } from 'react-redux';

import { deleteFavorite } from '../../Actions/FavoritesActions'
import { showDetails } from '../../Actions/FavoritesActions'
import { TRUSTFALL } from '../../Data/GlobalVars'

import { Card, Grid, Image, Button, Icon } from 'semantic-ui-react';
import '../../Stylesheets/Carousel.min.css';
import '../../Stylesheets/CarForSaleCard.css';

class FavCarsForSaleCard extends React.Component {

	state = {
		open: false
	};

	mapImages = () => {
		return this.props.car.media.photo_links.map((img) => {
			return (
				<div>
					<img alt='TRUSTFALL' src={!img ? `${TRUSTFALL}` : `${img}`} style={{ padding: '5px 5px' }} />
				</div>
			);
		});
	};

	toggleModal = () => {
		this.setState({
			open: !this.state.open
		});
	};

	deleteFavorite = (buildCarObj) => {
        console.log('DELETE', `User ${buildCarObj.user_id} with car VIN: ${buildCarObj.id}`);
        let user = this.props.currentUser
        let vin = buildCarObj.vin
		this.props.deleteFavorite(user, vin);
		// console.log('HIT');
        // this.setState({ activeIndex: data.activeIndex, loading: !this.state.loading });
		// this.props.landFavorites(this.props.api_urls).then((res) => {
			// this.setState({ loading: !this.state.loading });
		// });
        // console.log('Deleted Favorite', `${buildCarObj.id}: ${buildCarObj.user_id}`);
    }

    showDetails = (buildCarObj) => {
        console.log('Show Favorite Details', `${buildCarObj.id}: ${buildCarObj.user_id}`);
    }

	render() {

       const { car } = this.props

		const buildCarObj = {
			id: (!!car.id ? car.id : `${TRUSTFALL.id}`),
			user_id: (!!this.props.currentUser ? this.props.currentUser : `${TRUSTFALL.user_id}`),
			heading: (!!car.heading ? car.heading : `${TRUSTFALL.heading}`),
			car_specs: (!!car.build ? car.build : `${TRUSTFALL.car_specs}`),
			price: (!!car.ref_price ? car.ref_price : `${TRUSTFALL.price}`),
			miles: (!!car.miles ? car.miles : `${TRUSTFALL.miles}`),
			dealerInfo: (!!car.dealer ? car.dealer : `${TRUSTFALL.dealerInfo}`),
			distance: (!!car.dist ? car.dist : `${TRUSTFALL.distance}`),
			image: (!!car.media.photo_links ? (car.media.photo_links.length >= 2 ? car.media.photo_links[1] : `${TRUSTFALL.image}`) : `${TRUSTFALL.image}`),
			images: (!!car.media.photo_links ? (car.media.photo_links.length >= 2 ? car.media.photo_links[1] : `${TRUSTFALL.image}`) : `${TRUSTFALL.image}`),
			build: (!!car.build ? car.build : `${TRUSTFALL.build}`),
			make: (!!car.build.make ? car.build.make : `${TRUSTFALL.make}`),
			model: (!!car.build.model ? car.build.model : `${TRUSTFALL.model}`),
			trim: (!!car.build.trim ? car.build.trim : `${TRUSTFALL.trim}`),
			year: (!!car.build.year ? car.build.year : `${TRUSTFALL.year}`),
			vdp_url: (!!car.vdp_url ? car.vdp_url : `${TRUSTFALL.vdp_url}`),
			vin: (!!car.vin ? car.vin : `${TRUSTFALL.vin}`)
		};

		return (
			<Card className='car_card' color='black' style={{ padding: '1em 1em', margin: '1.1em 0.6em', 'box-shadow': '0 1px 4px 1px rgba(0,0,0,.1)' }}>
				<Grid>
					<Grid.Column width={5} style={{ padding: '0rem' }}>
						<Image size='medium' alt='no image' src={buildCarObj.image.length === 0 ? `${TRUSTFALL.image}` : `${buildCarObj.image}`} style={{ 'border-radius': '3px' }} />
					</Grid.Column>
					<Grid.Column width={7}>
						<Card.Content>
							<Card.Header textAlign={'left'}>{buildCarObj.heading}</Card.Header>
							<Card.Meta textAlign={'left'}>Miles: {buildCarObj.miles}</Card.Meta>
							<Card.Description textAlign={'left'}>${buildCarObj.price}.00</Card.Description>
						</Card.Content>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card.Content style={{'display': 'grid', 'margin': '1rem'}}>
							<Button.Group vertical>
								<Button onClick={this.toggleModal}>Images<Icon style={{'margin': "0px 0px 0px 5px"}} color='black' name='images' /></Button>
								<Button onClick={() => {this.fetchDetails()}}>Specs<Icon style={{'margin': "0px 0px 0px 5px"}} color='black' name='cog' /></Button>
								<Button onClick={() => window.open(buildCarObj.vdp_url)}>Dealer Info<Icon style={{'margin': "0px 0px 0px 5px"}} color='black' name='building' /></Button>
								<Button small inverted color='red' onClick={() => this.deleteFavorite(buildCarObj)}>Remove<Icon style={{'margin': "0px 0px 0px 5px"}} name='delete' /></Button>
							</Button.Group>
						</Card.Content>
					</Grid.Column>
				</Grid>
				{this.state.open ? <ViewCarSaleModal key={buildCarObj.id} buildCarObj={buildCarObj} toggleModal={this.toggleModal} mapImages={this.mapImages} open={this.state.open} addFavorite={this.addFavorite} /> : null}
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
    return {
		currentUser: state.user.currentUser,
		favorites: state.favorites.favorites
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
        deleteFavorite: (buildCarObj) => deleteFavorite(buildCarObj)(dispatch),
        showDetails: (buildCarObj) => showDetails(buildCarObj)(dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FavCarsForSaleCard);
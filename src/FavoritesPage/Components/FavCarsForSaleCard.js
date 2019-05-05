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
        console.log('Deleted Favorite', `{buildCarObj.id}: ${buildCarObj.user_id}`);
    }

    showDetails = (buildCarObj) => {
        console.log('Show Favorite Details', `{buildCarObj.id}: ${buildCarObj.user_id}`);
    }

	render() {
		const buildCarObj = {
			id: this.props.car.id,
			user_id: this.props.currentUser,
			heading: this.props.car.heading,
			car_specs: this.props.car.build,
			price: this.props.car.ref_price,
			miles: this.props.car.miles,
			dealerInfo: this.props.car.dealer,
			distance: this.props.car.dist,
			image: (!!this.props.car.media.photo_links ? (this.props.car.media.photo_links.length >= 2 ? this.props.car.media.photo_links[1] : `${TRUSTFALL}`) : `${TRUSTFALL}`),
			images: (!!this.props.car.media.photo_links ? (this.props.car.media.photo_links.length >= 2 ? this.props.car.media.photo_links[1] : `${TRUSTFALL}`) : `${TRUSTFALL}`),
			make: this.props.car.build.make,
			model: this.props.car.build.model,
			trim: this.props.car.build.trim,
			year: this.props.car.build.year,
			vdp_url: this.props.car.vdp_url,
			vin: this.props.car.vin
		};

		return (
			<Card className='car_card' color='black' style={{ padding: '1em 1em', margin: '1.1em 0.6em', 'box-shadow': '0 1px 4px 1px rgba(0,0,0,.1)' }}>
				<Grid>
					<Grid.Column width={5} style={{ padding: '0rem' }}>
						<Image size='medium' alt='no image' src={buildCarObj.image.length === 0 ? `${TRUSTFALL}` : `${buildCarObj.image}`} style={{ 'border-radius': '3px' }} />
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
		currentUser: state.cars.currentUser,
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
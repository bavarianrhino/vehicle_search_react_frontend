import React from 'react';
import ViewCarSaleModal from '../../LandingSearchPage/Components/ViewCarSaleModal';
import { connect } from 'react-redux';

import { handleAddFavorite } from '../../Actions/FavoritesActions'

import { Transition, Card, Grid, Image, Button, Icon } from 'semantic-ui-react';
import '../../Stylesheets/Carousel.min.css';
import '../../Stylesheets/CarForSaleCard.css';

class FavCarsForSaleCard extends React.Component {

	state = {
		open: false
	};

	mapImages = () => {
		const fallback = 'https://media-cf.assets-cdk.com/websites/5.0.4032-199/websitesEar/websitesWebApp/css/common/images/en_US/noImage_large.png';
		return this.props.car.media.photo_links.map((img) => {
			return (
				<div>
					<img alt='' src={this.props.car.media.photo_links === 0 ? `${fallback}` : `${img}`} style={{ padding: '5px 5px' }} />
				</div>
			);
		});
	};

	toggleModal = () => {
		this.setState({
			open: !this.state.open
		});
	};

	addFavorite = (buildCarObj) => {
		console.log('addFavorite', `{this.props.currentUser}: ${buildCarObj}`);
		this.props.handleAddFavorite(buildCarObj);
		console.log('AddedFavorite!');
	};

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
			image: this.props.car.media.photo_links[0],
			images: this.props.car.media.photo_links,
			make: this.props.car.build.make,
			model: this.props.car.build.model,
			trim: this.props.car.build.trim,
			year: this.props.car.build.year,
			vdp_url: this.props.car.vdp_url,
			vin: this.props.car.vin
		};

		const fallback = 'https://media-cf.assets-cdk.com/websites/5.0.4032-199/websitesEar/websitesWebApp/css/common/images/en_US/noImage_large.png';

        console.log(buildCarObj);

		return (
			<Transition.Group as={Card} duration={600} animation={'bounce'}>
				<Card className='car_card' color='black' style={{ padding: '1em 1em', margin: '0.5em 0.2em' }}>
					<Grid>
						<Grid.Column width={7}>
							<Image size='medium' alt='no image' src={buildCarObj.image.length === 0 ? `${fallback}` : `${buildCarObj.image}`} style={{ padding: '5px 5px' }} />
						</Grid.Column>
						<Grid.Column width={9}>
							<Card.Content>
								<Card.Header>{buildCarObj.heading}</Card.Header>
								<Card.Meta>
									<span>Miles: {buildCarObj.miles}</span>
								</Card.Meta>
								<Card.Description>${buildCarObj.price}.00</Card.Description>
								<Button inverted color='purple' onClick={this.toggleModal}>
									View Images
									<Icon color='black' name='images' />
								</Button>
								<Button inverted color='red' onClick={this.fetchDetails}>
									View Details
									<Icon color='black' name='images' />
								</Button>
								<Button inverted color='green' onClick={() => this.addFavorite(buildCarObj)}>
									Add To Watch List
									<Icon name='like' />
								</Button>
								<Button inverted color='blue' onClick={() => window.open(buildCarObj.vdp_url)}>
									See Dealer
									<Icon name='like' />
								</Button>
							</Card.Content>
						</Grid.Column>
					</Grid>
					{this.state.open ? <ViewCarSaleModal key={buildCarObj.id} buildCarObj={buildCarObj} toggleModal={this.toggleModal} mapImages={this.mapImages} open={this.state.open} addFavorite={this.addFavorite} /> : null}
				</Card>
			</Transition.Group>
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
		handleAddFavorite: (buildCarObj) => handleAddFavorite(buildCarObj)(dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FavCarsForSaleCard);
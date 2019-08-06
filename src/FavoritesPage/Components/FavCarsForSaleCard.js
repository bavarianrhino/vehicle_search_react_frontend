import React from 'react';
import ViewCarSaleModal from '../../LandingSearchPage/Components/ViewCarSaleModal';
import { landFavorites } from '../../Actions/FavoritesActions';
import { connect } from 'react-redux';

import { handleRemoveFavorite } from '../../Actions/FavoritesActions'
import { setCurrentUser } from '../../Actions/LoginSignUpActions'
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

	removeFavorite = (car) => {
		let car_user_obj = {
            car_id: car.car_id,
            user_id: this.props.currentUser,
            vin: car.vin
        }
		console.log('DELETE', `Car_ID: ${car.car_id}`);
        this.props.handleRemoveFavorite(car_user_obj).then((res) => console.log(res, 'Something happened!'));
			// this.props.setCurrentUser(this.props.currentUser).then((res) => {
				// console.log(res);
				// this.props.history.push('/');
			// });
		};
		// console.log('HIT');
	// };

	showDetails = (buildCarObj) => {
		console.log('Show Favorite Details', `${buildCarObj.id}: ${buildCarObj.user_id}`);
	};

	render() {
		const { car } = this.props;
		return (
			<Card className='car_card' color='black' style={{ padding: '1em 1em', margin: '1.1em 0.6em', 'box-shadow': '0 1px 4px 1px rgba(0,0,0,.1)' }}>
				<Grid>
					<Grid.Column width={5} style={{ padding: '0rem' }}>
						<Image size='medium' alt='no image' src={car.image === undefined ? `${TRUSTFALL.image}` : `${car.image}`} style={{ 'border-radius': '3px' }} />
					</Grid.Column>
					<Grid.Column width={7}>
						<Card.Content>
							<Card.Header textAlign={'left'}>{car.heading}</Card.Header>
							<Card.Meta textAlign={'left'}>Miles: {car.miles}</Card.Meta>
							<Card.Description textAlign={'left'}>${car.price}.00</Card.Description>
						</Card.Content>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card.Content style={{ display: 'grid', margin: '1rem' }}>
							<Button.Group vertical>
								<Button onClick={this.toggleModal}>Images<Icon style={{ margin: '0px 0px 0px 5px' }} color='black' name='images' /></Button>
								<Button onClick={() => {this.fetchDetails(car)}}>Specs<Icon style={{ margin: '0px 0px 0px 5px' }} color='black' name='cog' /></Button>
								<Button onClick={() => window.open(car.vdp_url)}>Dealer Info<Icon style={{ margin: '0px 0px 0px 5px' }} color='black' name='building' /></Button>
								<Button small inverted color='red' onClick={() => this.removeFavorite(car)}>Remove<Icon style={{ margin: '0px 0px 0px 5px' }} name='delete' /></Button>
							</Button.Group>
						</Card.Content>
					</Grid.Column>
				</Grid>
				{this.state.open ? <ViewCarSaleModal key={car.id} car={car} toggleModal={this.toggleModal} mapImages={this.mapImages} open={this.state.open} /> : null}
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
    return {
		currentUser: state.user.currentUser,
        favorites: state.favorites.favorites,
        api_urls: state.favorites.api_urls
	};
}

const mapDispatchToProps = (dispatch) => {
    return {
		landFavorites: (data) => landFavorites(data)(dispatch),
		handleRemoveFavorite: (user_id, car_id) => handleRemoveFavorite(user_id, car_id)(dispatch),
        showDetails: (buildCarObj) => showDetails(buildCarObj)(dispatch),
        setCurrentUser: (data) => setCurrentUser(data)(dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FavCarsForSaleCard);
import React from 'react';
import ViewCarSaleModal from './ViewCarSaleModal';
import { connect } from 'react-redux';

import { handleAddFavorite } from '../../Actions/FavoritesActions'
import { handleRemoveFavorite } from '../../Actions/FavoritesActions';
import { TRUSTFALL } from '../../Data/GlobalVars';
import { GOOGLE } from '../../Data/GlobalVars';

import { Card, Grid, Image, Button, Icon } from 'semantic-ui-react';
import '../../Stylesheets/Carousel.min.css';
import '../../Stylesheets/CarForSaleCard.css';

class CarForSaleCard extends React.Component {
    
	state = {
		open: false,
        favorite: false,
        userCarID: 0
	};

	componentDidMount() {
		this.checkFavs();
	}

	checkFavs = () => {
		this.props.favorites.map((fav) => {
			if (fav.vin === this.props.car.vin) {
				this.setState({ ...this.state, favorite: true, userCarID: fav.id });
			} else {
				return null;
			}
		});
	};

	mapImages = () => {
		return this.props.car.media.photo_links.map((img) => {
			return (
				<div>
					<img alt='' src={this.props.car.media.photo_links === undefined ? `${TRUSTFALL.image}` : `${img}`} style={{ padding: '5px 5px' }} />
				</div>
			);
		});
	};

	toggleModal = () => {
		this.setState({
			...this.state,
			open: !this.state.open
		});
	};

	addFavorite = (buildCarObj) => {
		if (!this.state.favorite) {
			this.setState({ ...this.state, favorite: true });
			// console.log('Adding a Favorite', buildCarObj);
			// console.log(buildCarObj);
			this.props.handleAddFavorite(buildCarObj).then((r) => this.checkFavs());
			// console.log('HIT!! ADDED!!');
		} else {
			this.setState({ ...this.state, favorite: false });
		}
	};

	removeFavorite = (buildCarObj, userCarID)  => {
        // console.log('Removing a Favorite', buildCarObj);
        let car_user_obj = {
            user_id: buildCarObj.user_id,
            car_id: userCarID,
            vin: buildCarObj.vin
        };
        this.props.handleRemoveFavorite(car_user_obj).then((res) => {
            this.setState({ ...this.state, favorite: false, userCarID: 0 });
        })
        // console.log('HIT!! Deleted!!');
    }

	render() {
		const { car } = this.props;

		const buildCarObj = {
			id: !!car.id ? car.id : `${TRUSTFALL.id}`,
			user_id: !!this.props.currentUser ? this.props.currentUser : `${TRUSTFALL.user_id}`,
			heading: !!car.heading ? car.heading : `${TRUSTFALL.heading}`,
			car_specs: !!car.build ? car.build : `${TRUSTFALL.car_specs}`,
			price: !!car.ref_price ? car.ref_price : `${TRUSTFALL.price}`,
			miles: !!car.miles ? car.miles : `${TRUSTFALL.miles}`,
			dealerInfo: !!car.dealer ? car.dealer : `${TRUSTFALL.dealerInfo}`,
			lat: !!car.dealer.latitude ? car.dealer.latitude : `${TRUSTFALL.dealerInfo}`,
			long: !!car.dealer.longitude ? car.dealer.longitude : `${TRUSTFALL.dealerInfo}`,
			distance: !!car.dist ? car.dist : `${TRUSTFALL.distance}`,
			image: !!car.media.photo_links !== undefined ? (car.media.photo_links.length >= 2 ? car.media.photo_links[1] : `${TRUSTFALL.image}`) : `${TRUSTFALL.image}`,
			images: !!car.media.photo_links !== undefined ? (car.media.photo_links.length >= 2 ? car.media.photo_links[1] : `${TRUSTFALL.image}`) : `${TRUSTFALL.image}`,
			build: !!car.build ? car.build : `${TRUSTFALL.build}`,
			make: !!car.build.make ? car.build.make : `${TRUSTFALL.make}`,
			model: !!car.build.model ? car.build.model : `${TRUSTFALL.model}`,
			trim: !!car.build.trim ? car.build.trim : `${TRUSTFALL.trim}`,
			year: !!car.build.year ? car.build.year : `${TRUSTFALL.year}`,
			vdp_url: !!car.vdp_url ? car.vdp_url : `${TRUSTFALL.vdp_url}`,
			vin: !!car.vin ? car.vin : `${TRUSTFALL.vin}`
		};

		const mapCoords = `${GOOGLE}${buildCarObj.lat},${buildCarObj.long}`;

		return (
			<Card className='car_card' color='black' style={{ padding: '1em 1em', margin: '0.5em 0.75em' }}>
				<Grid style={{ 'align-items': 'flex-start' }}>

					<Grid style={{ padding: '0rem', 'align-items': 'flex-start', 'margin-bottom': '2rem' }}>
						<Image size='medium' alt='no image' src={buildCarObj.image === undefined ? `${TRUSTFALL.image}` : `${buildCarObj.image}`} style={{ height: 'unset' }} />
					</Grid>

					<Grid style={{ margin: 'auto auto auto auto' }}>
						<Card.Content>
							<Card.Header>{buildCarObj.heading}</Card.Header>
							<Card.Meta>
								<span>Miles: {buildCarObj.miles}</span>
							</Card.Meta>
							<Card.Description>${buildCarObj.price}.00</Card.Description>
							<Button.Group style={{ margin: '0.95rem -0.25rem 0.95rem -0.25rem' }}>
								<Button
									icon
									onClick={() => {
										this.state.favorite ? this.removeFavorite(buildCarObj, this.state.userCarID) : this.addFavorite(buildCarObj)
									}}>
									{this.state.favorite ? <Icon name='heart' color='red' /> : <Icon name='heart' color='green' />}
								</Button>
								<Button icon onClick={this.toggleModal}>
									<Icon name='images' />
								</Button>
								<Button icon onClick={() => window.open(mapCoords)}>
									<Icon name='google' />
								</Button>
								<Button icon onClick={() => window.open(buildCarObj.vdp_url)}>
									<Icon name='linkify' />
								</Button>
							</Button.Group>
						</Card.Content>
					</Grid>
				</Grid>
                {/* Try to move modal to a higher level component */}
				{this.state.open ? <ViewCarSaleModal key={buildCarObj.id} buildCarObj={buildCarObj} toggleModal={this.toggleModal} mapImages={this.mapImages} open={this.state.open} addFavorite={this.addFavorite} /> : null}
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
    return {
		currentUser: state.user.currentUser,
		favorites: state.favorites.api_urls
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
        handleAddFavorite: (buildCarObj) => handleAddFavorite(buildCarObj)(dispatch), 
        handleRemoveFavorite: (buildCarObj) => handleRemoveFavorite(buildCarObj)(dispatch)
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(CarForSaleCard);

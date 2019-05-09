import React from 'react';
import ViewCarSaleModal from './ViewCarSaleModal';
import { connect } from 'react-redux';

import { handleAddFavorite } from '../../Actions/FavoritesActions'
import { TRUSTFALL } from '../../Data/GlobalVars';
import { GOOGLE } from '../../Data/GlobalVars';

import { Card, Grid, Image, Button, Icon } from 'semantic-ui-react';
import '../../Stylesheets/Carousel.min.css';
import '../../Stylesheets/CarForSaleCard.css';

class CarForSaleCard extends React.Component {

	state = {
        open: false,
        favorite: false
    };

    componentDidMount () {
        this.checkFavs()
    }

    checkFavs = () => {
        this.props.favorites.map((fav) => {
            if (fav.vin === this.props.car.vin) {
                this.setState({ ...this.state, favorite: true})
            } else {
                return null
            }
        })
    }

	mapImages = () => {
		return this.props.car.media.photo_links.map((img) => {
			return (<div><img alt='' src={this.props.car.media.photo_links === undefined ? `${TRUSTFALL.image}` : `${img}`} style={{ padding: '5px 5px' }} /></div>);
		});
	};

	toggleModal = () => {
		this.setState({
            ...this.state,
			open: !this.state.open
		});
	};

	addFavorite = (buildCarObj) => {
        if(!this.state.favorite) {
            this.setState({ ...this.state, favorite: true });
            console.log('Adding a Favorite', buildCarObj);
            console.log(buildCarObj);
            this.props.handleAddFavorite(buildCarObj);
            console.log('HIT!! ADDED!!')
        } else {
            this.setState({ ...this.state, favorite: false })
            // remove favorite
        }
	};

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
            lat: (!!car.dealer.latitude ? car.dealer.latitude : `${TRUSTFALL.dealerInfo}`),
            long: (!!car.dealer.longitude ? car.dealer.longitude : `${TRUSTFALL.dealerInfo}`),
			distance: (!!car.dist ? car.dist : `${TRUSTFALL.distance}`),
			image: (!!car.media.photo_links !== undefined ? (car.media.photo_links.length >= 2 ? car.media.photo_links[1] : `${TRUSTFALL.image}`) : `${TRUSTFALL.image}`),
			images: (!!car.media.photo_links  !== undefined ? (car.media.photo_links.length >= 2 ? car.media.photo_links[1] : `${TRUSTFALL.image}`) : `${TRUSTFALL.image}`),
			build: (!!car.build ? car.build : `${TRUSTFALL.build}`),
			make: (!!car.build.make ? car.build.make : `${TRUSTFALL.make}`),
			model: (!!car.build.model ? car.build.model : `${TRUSTFALL.model}`),
			trim: (!!car.build.trim ? car.build.trim : `${TRUSTFALL.trim}`),
			year: (!!car.build.year ? car.build.year : `${TRUSTFALL.year}`),
			vdp_url: (!!car.vdp_url ? car.vdp_url : `${TRUSTFALL.vdp_url}`),
			vin: (!!car.vin ? car.vin : `${TRUSTFALL.vin}`)
        };
        
        const mapCoords = `${GOOGLE}${buildCarObj.lat},${buildCarObj.long}`;
        // const likedLabel = { color: 'red', corner: 'left', icon: 'heart' };
        // const needToLikLabel = { color: 'green', corner: 'left', icon: 'heart' };

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
								<Button icon onClick={() => this.addFavorite(buildCarObj)}>
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
		handleAddFavorite: (buildCarObj) => handleAddFavorite(buildCarObj)(dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CarForSaleCard);

// import React from 'react';
// import ViewCarSaleModal from './ViewCarSaleModal';
// import { connect } from 'react-redux';
// import { Carousel } from 'react-responsive-carousel';

// import { Card, Grid, Image, Label, Button, Icon, Modal, Header } from 'semantic-ui-react';
// import '../../Stylesheets/Carousel.min.css';
// import '../../Stylesheets/CarForSaleCard.css';

// const CarForSaleCard = (props) => {
    
//     let buildCarObj = {
//             id: props.car.id,
//             heading: props.car.heading,
//             price: props.car.ref_price,
//             miles: props.car.miles,
//             dealerInfo: props.car.dealer,
//             distance: props.car.dist,
//             image: props.car.media.photo_links[0],
//             images: props.car.media.photo_links,
//             make: props.car.make,
//             model: props.car.model,
//             trim: props.car.trim,
//             vdp_url: props.car.vdp_url,
//             vin: props.car.vin
//     };
    
//     const fallback = 'https://media-cf.assets-cdk.com/websites/5.0.4032-199/websitesEar/websitesWebApp/css/common/images/en_US/noImage_large.png'

//     let mapImages = () => {
//         let emptyArr = buildCarObj.images.length
//         console.log(emptyArr)
//         const fallback = 'https://media-cf.assets-cdk.com/websites/5.0.4032-199/websitesEar/websitesWebApp/css/common/images/en_US/noImage_large.png'
//         return buildCarObj.images.map((img) => {
//             return <div><img alt='' src={(emptyArr === 0) ? `${fallback}` : `${img}`} style={{ padding: '5px 5px' }} /></div>
//         })
//     }

//     // toggleModal = () => {
//     //     this.setState({
//     //        open: !this.state.open 
//     //     })
//     // }

//     return (
// 			<Card className='car_card' color='black' style={{ padding: '1em 1em', margin: '0.5em 0.2em' }}>
// 				<Grid>
// 					<Grid.Column width={7}>
// 						<Image size='medium' alt='no image' src={(buildCarObj.image.length === 0) ? `${fallback}` : `${buildCarObj.image}`} style={{ padding: '5px 5px' }} />
// 					</Grid.Column>
// 					<Grid.Column width={9}>
// 						<Card.Content>
// 							<Card.Header>{buildCarObj.heading}</Card.Header>
// 							<Card.Meta>
// 								<span>Miles: {buildCarObj.miles}</span>
// 							</Card.Meta>
// 							<Card.Description>${buildCarObj.price}.00</Card.Description>
// 							<Modal trigger={<Button inverted color='black' floated='right'>View Images<Icon color='black' name='images' /></Button>} closeIcon>
// 								<Modal.Header>{buildCarObj.heading}<span style={{float: 'right'}}>${buildCarObj.price}.00</span></Modal.Header>
// 								<Modal.Content >
// 									<Modal.Description>
// 									<Carousel showArrows={true} showIndicators={false} showThumbs={true} width='98%'>
// 										{mapImages()}
// 									</Carousel>
// 									</Modal.Description>
// 								</Modal.Content>
// 								<Modal.Actions>
// 									<Button primary style={{float: 'left'}}>
// 										Proceed <Icon name='right chevron' />
// 									</Button>
//                                     <Button primary>
// 										Proceed <Icon name='right chevron' />
// 									</Button>
// 								</Modal.Actions>
// 							</Modal>
//                             <Button inverted color='green' floated='right' onClick={this.addFavorite} >Watch<Icon name='like' /></Button>
// 						</Card.Content>
// 					</Grid.Column>
// 				</Grid>
// 			</Card>
// 	);
// }
// // this.state.show ? <ViewCarSaleModal buildCarObj={buildCarObj} mapImages={this.mapImages} open={this.state.open} /> : null;

// const mapStateToProps = (state) => {
//     return {
//         attr: state.attr
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CarForSaleCard);







//<Card className='car_card' color='black' style={{ padding: '1em 1em', margin: '0.5em 0.2em' }}>
//	<Grid>
//		<Grid.Column width={7}>
//			<Image size='medium' alt='no image' src={buildCarObj.image === undefined ? `${TRUSTFALL.image}` : `${buildCarObj.image}`} style={{ padding: '5px 5px' }} />
//		</Grid.Column>
//		<Grid.Column width={9}>
//			<Card.Content>
//				<Card.Header>{buildCarObj.heading}</Card.Header>
//				<Card.Meta>
//					<span>Miles: {buildCarObj.miles}</span>
//				</Card.Meta>
//				<Card.Description>${buildCarObj.price}.00</Card.Description>
//				<Button inverted color='black' floated='right' onClick={this.toggleModal}>
//					View Images
//					<Icon color='black' name='images' />
//				</Button>
//				<Button inverted color='green' floated='right' onClick={() => this.addFavorite(buildCarObj)}>
//					Watch
//					<Icon name='like' />
//				</Button>
//			</Card.Content>
//		</Grid.Column>
//	</Grid>
//	{this.state.open ? <ViewCarSaleModal key={buildCarObj.id} buildCarObj={buildCarObj} toggleModal={this.toggleModal} mapImages={this.mapImages} open={this.state.open} addFavorite={this.addFavorite} /> : null}
//</Card>;
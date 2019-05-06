import React from 'react';
import ViewCarSaleModal from './ViewCarSaleModal';
import { connect } from 'react-redux';

import { handleAddFavorite } from '../../Actions/FavoritesActions'

import { Card, Grid, Image, Button, Icon } from 'semantic-ui-react';
import '../../Stylesheets/Carousel.min.css';
import '../../Stylesheets/CarForSaleCard.css';

class CarForSaleCard extends React.Component {

	state = {
		open: false
	};

	mapImages = () => {
		const fallback = 'https://media-cf.assets-cdk.com/websites/5.0.4032-199/websitesEar/websitesWebApp/css/common/images/en_US/noImage_large.png';
		return this.props.car.media.photo_links.map((img) => {
			return (<div><img alt='' src={this.props.car.media.photo_links === undefined ? `${fallback}` : `${img}`} style={{ padding: '5px 5px' }} /></div>);
		});
	};

	toggleModal = () => {
		this.setState({
			open: !this.state.open
		});
	};

	addFavorite = (buildCarObj) => {
        console.log('addFavorite');
        console.log(this.props.currentUser)
        console.log(buildCarObj);
        this.props.handleAddFavorite(buildCarObj);
        console.log('HIT')
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
			image1: this.props.car.media.photo_links[1],
			images: this.props.car.media.photo_links,
			make: this.props.car.build.make,
			model: this.props.car.build.model,
			trim: this.props.car.build.trim,
			year: this.props.car.build.year,
			vdp_url: this.props.car.vdp_url,
			vin: this.props.car.vin
		};

		const fallback = 'https://media-cf.assets-cdk.com/websites/5.0.4032-199/websitesEar/websitesWebApp/css/common/images/en_US/noImage_large.png';

		return (
			<Card className='car_card' color='black' style={{ padding: '1em 1em', margin: '0.5em 0.2em' }}>
				<Grid>
					<Grid.Column width={7}>
						<Image size='medium' alt='no image' src={buildCarObj.image1 === undefined ? `${fallback}` : `${buildCarObj.image1}`} style={{ padding: '5px 5px' }} />
					</Grid.Column>
					<Grid.Column width={9}>
						<Card.Content>
							<Card.Header>{buildCarObj.heading}</Card.Header>
							<Card.Meta>
								<span>Miles: {buildCarObj.miles}</span>
							</Card.Meta>
							<Card.Description>${buildCarObj.price}.00</Card.Description>
							<Button inverted color='black' floated='right' onClick={this.toggleModal}>
								View Images
								<Icon color='black' name='images' />
							</Button>
							<Button inverted color='green' floated='right' onClick={() => this.addFavorite(buildCarObj)}>
								Watch
								<Icon name='like' />
							</Button>
						</Card.Content>
					</Grid.Column>
				</Grid>
				{this.state.open ? (
					<ViewCarSaleModal
						key={buildCarObj.id}
						buildCarObj={buildCarObj}
						toggleModal={this.toggleModal}
						mapImages={this.mapImages}
						open={this.state.open}
						addFavorite={this.addFavorite}
					/>
				) : null}
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

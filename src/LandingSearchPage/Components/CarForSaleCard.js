import React from 'react';
import ViewCarSaleModal from './ViewCarSaleModal';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';

import { Card, Grid, Image, Label, Button, Icon, Modal, Header } from 'semantic-ui-react';
import '../../Stylesheets/Carousel.min.css';
import '../../Stylesheets/CarForSaleCard.css';

const CarForSaleCard = (props) => {
    
    let buildCarObj = {
            id: props.car.id,
            heading: props.car.heading,
            price: props.car.ref_price,
            miles: props.car.miles,
            dealerInfo: props.car.dealer,
            distance: props.car.dist,
            image: props.car.media.photo_links[0],
            images: props.car.media.photo_links,
            make: props.car.make,
            model: props.car.model,
            trim: props.car.trim,
            vdp_url: props.car.vdp_url,
            vin: props.car.vin
    };
    
    const fallback = 'https://media-cf.assets-cdk.com/websites/5.0.4032-199/websitesEar/websitesWebApp/css/common/images/en_US/noImage_large.png'

    let mapImages = () => {
        let emptyArr = buildCarObj.images.length
        console.log(emptyArr)
        const fallback = 'https://media-cf.assets-cdk.com/websites/5.0.4032-199/websitesEar/websitesWebApp/css/common/images/en_US/noImage_large.png'
        return buildCarObj.images.map((img) => {
            return <div><img alt='' src={(emptyArr === 0) ? `${fallback}` : `${img}`} style={{ padding: '5px 5px' }} /></div>
        })
    }

    // toggleModal = () => {
    //     this.setState({
    //        open: !this.state.open 
    //     })
    // }

    return (
			<Card className='car_card' color='black' style={{ padding: '1em 1em', margin: '0.5em 0.2em' }}>
				<Grid>
					<Grid.Column width={7}>
						<Image size='medium' alt='no image' src={(buildCarObj.image.length === 0) ? `${fallback}` : `${buildCarObj.image}`} style={{ padding: '5px 5px' }} />
					</Grid.Column>
					<Grid.Column width={9}>
						<Card.Content>
							<Card.Header>{buildCarObj.heading}</Card.Header>
							<Card.Meta>
								<span>Miles: {buildCarObj.miles}</span>
							</Card.Meta>
							<Card.Description>${buildCarObj.price}.00</Card.Description>
							<Modal trigger={<Button inverted color='blue' floated='right'>View Images<Icon name='like' /></Button>} closeIcon>
								<Modal.Header>{buildCarObj.heading}<span style={{float: 'right'}}>${buildCarObj.price}.00</span></Modal.Header>
								<Modal.Content >
									<Modal.Description>
									<Carousel showArrows={true} showIndicators={false} showThumbs={false} width='98%'>
										{mapImages()}
									</Carousel>
									</Modal.Description>
								</Modal.Content>
								<Modal.Actions>
									<Button primary style={{float: 'left'}}>
										Proceed <Icon name='right chevron' />
									</Button>
                                    <Button primary>
										Proceed <Icon name='right chevron' />
									</Button>
								</Modal.Actions>
							</Modal>
                            <Button inverted color='green' floated='right'>Watch<Icon name='right chevron' /></Button>
						</Card.Content>
					</Grid.Column>
				</Grid>
			</Card>
	);
}
// this.state.show ? <ViewCarSaleModal buildCarObj={buildCarObj} mapImages={this.mapImages} open={this.state.open} /> : null;

const mapStateToProps = (state) => {
    return {
        attr: state.attr
    }
}

const mapDispatchToProps = (dispatch) => ({
    functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

export default connect(mapStateToProps, mapDispatchToProps)(CarForSaleCard);

/* <Image size='large' src={cardObj.image.length === 0 ? `${fallback}` : `${cardObj.image[0]}`} style={{ padding: '5px 5px' }} /> */

// var React = require('react');
// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;

// var DemoCarousel = React.createClass({
// 	render() {
// 		return (
// 			<Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
// 				<div>
// 					<img src='assets/1.jpeg' />
// 					<p className='legend'>Legend 1</p>
// 				</div>
// 				<div>
// 					<img src='assets/2.jpeg' />
// 					<p className='legend'>Legend 2</p>
// 				</div>
// 				<div>
// 					<img src='assets/3.jpeg' />
// 					<p className='legend'>Legend 3</p>
// 				</div>
// 				<div>
// 					<img src='assets/4.jpeg' />
// 					<p className='legend'>Legend 4</p>
// 				</div>
// 				<div>
// 					<img src='assets/5.jpeg' />
// 					<p className='legend'>Legend 5</p>
// 				</div>
// 				<div>
// 					<img src='assets/6.jpeg' />
// 					<p className='legend'>Legend 6</p>
// 				</div>
// 			</Carousel>
// 		);
// 	}
// });


/* <Item>
	<Item.Image size='small' src={`${cardObj.image}`} />

	<Item.Content>
		<Item.Header as=''>
			{cardObj.make} {cardObj.model} {cardObj.trim}
		</Item.Header>
		<Item.Meta>
			<span className='cinema'>Miles: {cardObj.miles}</span>
		</Item.Meta>
		<Item.Description>${cardObj.price}.00</Item.Description>
		<Item.Extra>
			<Label>IMAX</Label>
			<Label icon='globe' content='Dealer Website' />
			<Button inverted color='green' floated='right'>
				View Car
				<Icon name='right chevron' />
			</Button>
		</Item.Extra>
	</Item.Content>
</Item>; */

// cardObj = {
// 	id: this.props.car.id,
// 	heading: this.props.car.heading,
// 	price: this.props.car.ref_price,
// 	miles: this.props.car.miles,
// 	dealerInfo: this.props.car.dealer,
// 	distance: this.props.car.dist,
// 	image: this.props.car.media.photo_links[0],
// 	images: this.props.car.media.photo_links,
// 	make: this.props.car.make,
// 	model: this.props.car.model,
// 	trim: this.props.car.trim,
// 	vdp_url: this.props.car.vdp_url,
// 	vin: this.props.car.vin
// };
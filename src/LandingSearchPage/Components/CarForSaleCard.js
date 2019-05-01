import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';

import { Card, Grid, Image, Label, Button, Icon } from 'semantic-ui-react';
import '../../App.css';


const CarForSaleCard = (props) => {
    
    let cardObj = {
		id: props.car.id,
		heading: props.car.heading,
		price: props.car.ref_price,
		miles: props.car.miles,
		image: props.car.media.photo_links,
		make: props.car.make,
		model: props.car.model,
		trim: props.car.trim,
		vdp_url: props.car.vdp_url
	};

    const fallback = 'https://media-cf.assets-cdk.com/websites/5.0.4032-199/websitesEar/websitesWebApp/css/common/images/en_US/noImage_large.png'

    let mapImages = () => {
        let emptyArr = cardObj.image.length
        const fallback = 'https://media-cf.assets-cdk.com/websites/5.0.4032-199/websitesEar/websitesWebApp/css/common/images/en_US/noImage_large.png'
        return cardObj.image.map((img) => {
            return <div><img src={(emptyArr === 0) ? `${fallback}` : `${img}`} style={{ padding: '5px 5px' }} /></div>
        })
    }

    return (
		<div>
			<Card className='car_card' fluid color='black' style={{ padding: '1.5em 1.5em', margin: '1em 0em' }}>
				<Grid>
					<Grid.Column width={5}>
                        <Carousel showArrows={true} >
                            {mapImages()}
                        </Carousel>
					</Grid.Column>
					<Grid.Column width={6}>
						<Card.Content>
							<Card.Header>{cardObj.heading}</Card.Header>
							<Card.Meta>
								<span>Miles: {cardObj.miles}</span>
							</Card.Meta>
							<Card.Description>${cardObj.price}.00</Card.Description>
						</Card.Content>
					</Grid.Column>
					<Grid.Column width={5}>
						<Card.Content extra>
							<Label>IMAX</Label>
							<Label icon='globe' content='Dealer Website' />
							<Button inverted color='green' floated='right'>
								View Car
								<Icon name='right chevron' />
							</Button>
						</Card.Content>
					</Grid.Column>
				</Grid>
			</Card>
		</div>
	);
}


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
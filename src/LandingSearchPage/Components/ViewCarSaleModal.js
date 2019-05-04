import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';

import { Button, Icon, Modal } from 'semantic-ui-react';
import '../../Stylesheets/Carousel.min.css';
import '../../Stylesheets/CarForSaleCard.css';


const ViewCarSaleModal = (props) => {

    console.log(props.car)
    
    return (
		<Modal open={props.open}>
			<Modal.Header>
				{props.buildCarObj.heading}
				<span style={{ float: 'right' }}>${props.buildCarObj.price}.00</span>
			</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<Carousel showArrows={true} showIndicators={false} showThumbs={true} width='98%'>
						{props.mapImages()}
					</Carousel>
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button icon color='red' labelPosition='right' onClick={() => props.toggleModal()}>Next<Icon name='right arrow' /></Button>
			</Modal.Actions>
		</Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewCarSaleModal);
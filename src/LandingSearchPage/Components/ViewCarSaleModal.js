// import React from 'react';
// import { connect } from 'react-redux';
// import { Carousel } from 'react-responsive-carousel';

// import { Card, Grid, Image, Label, Button, Icon, Modal, Header } from 'semantic-ui-react';
// import '../../Stylesheets/Carousel.min.css';
// import '../../Stylesheets/CarForSaleCard.css';


// const ViewCarSaleModal = (props) => {

//     console.log(props.car)
    
//     return (
// 		<div>
// 			<Modal open={props.open}>
// 				<Modal.Header>Profile Picture</Modal.Header>
// 				<Modal.Content image>
// 					<Carousel showArrows={true} showIndicators={false} showThumbs={true} width='98%'>
// 						{this.props.mapImages()}
// 					</Carousel>
					
// 					<Modal.Description>
// 						<Header>Modal Header</Header>
// 						<p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
// 						<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
// 						<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
// 						<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
// 						<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
// 						<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
// 						<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
// 						<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
// 						<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
// 					</Modal.Description>
// 				</Modal.Content>
// 				<Modal.Actions>
// 					<Button primary>
// 						Proceed <Icon name='right chevron' />
// 					</Button>
// 				</Modal.Actions>
// 			</Modal>
// 		</div>
// 	);
// }

// const mapStateToProps = (state) => {
//     return {
//         attr: state.attr
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ViewCarSaleModal
// );
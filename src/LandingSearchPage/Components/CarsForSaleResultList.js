import React from 'react';
import CarForSaleCard from './CarForSaleCard';
// import ViewCarSaleModal from './ViewCarSaleModal';
import { connect } from 'react-redux';

import { Card } from 'semantic-ui-react';


class CarsForSaleResultList extends React.Component {
	// state = {
	// 	open: false
	// };

	mapCars = (props) => {
        return this.props.cars.map((car) => {
			return <CarForSaleCard key={car.id} car={car} />;
		});
	};

	// mapCarModal = (props) => {
	// 	return this.props.cars.map((car) => {
	// 		return <ViewCarSaleModal key={car.id} car={car} toggleModal={this.toggleModal} />;
	// 	});
	// };

	// toggleModal = () => {
	// 	this.setState({
	// 		open: !this.state.open
	// 	});
	// };

	render() {
		return (
			<div>
				<Card.Group textAlign='center' itemsPerRow={2} style={{ display: 'flex', margin: '3.125em auto' }}>
					{this.props.cars ? this.mapCars() : null}
				</Card.Group>
			</div>
		);
	}
}
/* <CarForSaleCard />; */
// {this.state.open ? <ViewCarSaleModal key={car.id} car={car} toggleModal={this.toggleModal} /> : null}


const mapStateToProps = (state) => {
    return {
        cars: state.cars.carsForSale.listings
    }
}

const mapDispatchToProps = (dispatch) => ({
    functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

export default connect(mapStateToProps, mapDispatchToProps)(CarsForSaleResultList);
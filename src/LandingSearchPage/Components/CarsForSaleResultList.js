import React from 'react';
import CarForSaleCard from './CarForSaleCard';
// import ViewCarSaleModal from './ViewCarSaleModal';
import { connect } from 'react-redux';

import { Card } from 'semantic-ui-react';


class CarsForSaleResultList extends React.Component {
    
	state = {
        open: false
    };
    
	mapNewCars = (props) => {
        let i = this.props.render_option
        let arr = this.props.new_cars
        let newArr = (arr.slice(0, i))
        console.log(newArr)
		return newArr.map((car) => {
            return <CarForSaleCard key={car.id} car={car} />;
		});
    }
	

	mapUsedCars = (props) => {
		return this.props.used_cars.map((car) => {
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
        console.log(this.props.new_cars);
		return (
			<div>
				<Card.Group textAlign='center' itemsPerRow={5} style={{ display: 'flex', margin: '1.125em auto' }}>
					{this.props.activeIndex === 0 && this.props.new_cars ? this.mapNewCars() : null}
				</Card.Group>
				<Card.Group textAlign='center' itemsPerRow={5} style={{ display: 'flex', margin: '1.125em auto' }}>
					{this.props.activeIndex === 1 && this.props.used_cars ? this.mapUsedCars() : null}
				</Card.Group>
			</div>
		);
	}
}
/* <CarForSaleCard />; */
// {this.state.open ? <ViewCarSaleModal key={car.id} car={car} toggleModal={this.toggleModal} /> : null}


const mapStateToProps = (state) => {
    return {
		used_cars: state.used_cars.listings,
		new_cars: state.new_cars.listings,
		render_option: state.new_cars.render_option,
		activeIndex: state.user.activeTab
	};
}

const mapDispatchToProps = (dispatch) => ({
    functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

export default connect(mapStateToProps, mapDispatchToProps)(CarsForSaleResultList);
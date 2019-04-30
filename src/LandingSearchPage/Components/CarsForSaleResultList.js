import React from 'react';
import CarForSaleCard from './CarForSaleCard';
import { connect } from 'react-redux';

import { Card } from 'semantic-ui-react';


class CarsForSaleResultList extends React.Component {

    state = {
        attr: null
    }

    mapCars = (props) => {
        return this.props.cars.map((c) => {
            console.log(c)
            return <CarForSaleCard car={c}/>
        })
    }

    render() {
        return (
			<div>
				<Card.Group textAlign='center' style={{ display: 'flow-root', margin: '3.125em auto' }}>
					{this.props.cars ? this.mapCars() : null}
				</Card.Group>
			</div>
		);
    }
}
/* <CarForSaleCard />; */


const mapStateToProps = (state) => {
    return {
        cars: state.cars.carsForSale.listings
    }
}

const mapDispatchToProps = (dispatch) => ({
    functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

export default connect(mapStateToProps, mapDispatchToProps)(CarsForSaleResultList);
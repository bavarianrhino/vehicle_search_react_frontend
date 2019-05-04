import React from 'react';
import FavCarsForSaleCard from './FavCarsForSaleCard';
import { connect } from 'react-redux';

import { Card } from 'semantic-ui-react';


class FavCarsForSaleList extends React.Component {

    mapFavCars = (props) => {
        return this.props.favCars.map((car) => {
            console.log(car)
            return <FavCarsForSaleCard key={car.id} car={car} />;
        })
    }

    render() {
        return (
			<Card.Group textAlign='center' itemsPerRow={1} style={{ display: 'flex', margin: '0.125em auto' }}>
				{this.props.favCars ? this.mapFavCars() : null}
			</Card.Group>
		);
    }
}

const mapStateToProps = (state) => {
    return {
        favCars: state.favorites.favorites
    }
}

const mapDispatchToProps = (dispatch) => ({
    functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

export default connect(mapStateToProps, mapDispatchToProps)(FavCarsForSaleList);

import React from 'react';
import FavCarsForSaleCard from './FavCarsForSaleCard';
import { connect } from 'react-redux';

import { Card } from 'semantic-ui-react';


class FavCarsForSaleList extends React.Component {

    mapFavCars = (props) => {
        return this.props.favCars.map((car) => {
            return <FavCarsForSaleCard key={car.id} car={car}/>;
        })
    }

    render() {
        return (
			<Card.Group textAlign='center' itemsPerRow={2} style={{ display: 'flex', margin: '3.125em auto' }}>
				{this.props.favCars ? this.this.mapFavCars() : null}
			</Card.Group>
		);
    }
}

export default connect(null, null)(FavCarsForSaleList);

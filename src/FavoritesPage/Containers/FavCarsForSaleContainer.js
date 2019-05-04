import React from 'react';
import FavCarsForSaleList from '../Components/FavCarsForSaleList';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';


class FavCarsForSaleContainer extends React.Component {

    render() {
        return (
            <FavCarsForSaleList favCars={this.favCars} />
		);
    }
}

export default connect(null, null)(FavCarsForSaleContainer);
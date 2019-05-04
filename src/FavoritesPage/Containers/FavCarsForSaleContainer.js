import React from 'react';
import FavCarsForSaleList from '../Components/FavCarsForSaleList';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';


class FavCarsForSaleContainer extends React.Component {

    render() {
        return (
			<div>
				<FavCarsForSaleList favCars={this.favCars} />
			</div>
		);
    }
}

export default connect(null, null)(FavCarsForSaleContainer);
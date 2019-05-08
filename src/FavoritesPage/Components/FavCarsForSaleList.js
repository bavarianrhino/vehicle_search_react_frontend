import React from 'react';
import FavCarsForSaleCard from './FavCarsForSaleCard';
import { connect } from 'react-redux';
import { landFavorites } from '../../Actions/FavoritesActions';
import { TRUSTFALL } from '../../Data/GlobalVars';

import { Card } from 'semantic-ui-react';


class FavCarsForSaleList extends React.Component {

    state = {
        loading: true,
        final_load: false,
        res: []
    }

    mapFavCars = (props) => {
            return this.props.favCars.map((car) => {
                let buildCarObj = {
                    id: (!!car.id ? car.id : `${TRUSTFALL.id}`),
                    car_id: (!!car.car_id ? car.car_id : car.vin),
                    user_id: (!!this.props.currentUser ? this.props.currentUser : `${TRUSTFALL.user_id}`),
                    heading: (!!car.heading ? car.heading : `${TRUSTFALL.heading}`),
                    car_specs: (!!car.build ? car.build : `${TRUSTFALL.car_specs}`),
                    price: (!!car.ref_price ? car.ref_price : `${TRUSTFALL.price}`),
                    miles: (!!car.miles ? car.miles : `${TRUSTFALL.miles}`),
                    dealerInfo: (!!car.dealer ? car.dealer : `${TRUSTFALL.dealerInfo}`),
                    distance: (!!car.dist ? car.dist : `${TRUSTFALL.distance}`),
                    image: (car.media.photo_links !== undefined ? (car.media.photo_links.length >= 2 ? car.media.photo_links[1] : `${TRUSTFALL.image}`) : `${TRUSTFALL.image}`),
                    images: (car.media.photo_links !== undefined ? (car.media.photo_links.length >= 2 ? car.media.photo_links[1] : `${TRUSTFALL.image}`) : `${TRUSTFALL.image}`),
                    build: (!!car.build ? car.build : `${TRUSTFALL.build}`),
                    make: (!!car.build.make ? car.build.make : `${TRUSTFALL.make}`),
                    model: (!!car.build.model ? car.build.model : `${TRUSTFALL.model}`),
                    trim: (!!car.build.trim ? car.build.trim : `${TRUSTFALL.trim}`),
                    year: (!!car.build.year ? car.build.year : `${TRUSTFALL.year}`),
                    vdp_url: (!!car.vdp_url ? car.vdp_url : `${TRUSTFALL.vdp_url}`),
                    vin: (!!car.vin ? car.vin : `${TRUSTFALL.vin}`)}
				return <FavCarsForSaleCard key={car.id} car={buildCarObj} />;
			});
        }

    render() {
        return (
			<Card.Group textAlign='center' itemsPerRow={1} style={{ display: 'flex', margin: '0.125em auto' }}>
				{(this.props.favCars.length === this.props.api_urls.length) ? this.mapFavCars() : null}
			</Card.Group>
		);
    }
}

const mapStateToProps = (state) => {
    return {
		favCars: state.favorites.favorites,
		api_urls: state.favorites.api_urls,
		load: state.favorites.loading
	};
}

const mapDispatchToProps = (dispatch) => ({
    landFavorites: (data) => landFavorites(data)(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FavCarsForSaleList);

import React from 'react';
import NavBar from '../../NavBar/NavBar';
import FavCarsForSaleContainer from './FavCarsForSaleContainer';
import FavCarValuesContainer from './FavCarValuesContainer';

import { fetchFavorites } from '../../Actions/FavoritesActions'
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';


class Favorites extends React.Component {

    state = {
        attr: null
    }

    componentDidMount () {
        this.props.fetchFavorites().then(console.log)
    }

    render() {
        return (
			<div>
				{this.funcName}
				<NavBar />
				<FavCarsForSaleContainer />
                <FavCarValuesContainer />
			</div>
		);
    }
}


const mapStateToProps = (state) => {
    return {
        attr: state.attr
    }
}

const mapDispatchToProps = dispatch => {
    return {
		fetchFavorites: (data) => fetchFavorites(data)(dispatch)
		// openModal: (current) => dispatch(openModal(current))
	};
};

export default connect(null, mapDispatchToProps)(Favorites);
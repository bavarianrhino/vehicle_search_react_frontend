import React from 'react';
import NavBar from '../../NavBar/NavBar';
import FavCarsForSaleContainer from './FavCarsForSaleContainer';
import FavCarValuesContainer from './FavCarValuesContainer';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';


class Favorites extends React.Component {

    state = {
        attr: null
    }

    funcName = (e) => {
        console.log(e.target.value)
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

const mapDispatchToProps = (dispatch) => ({
    functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
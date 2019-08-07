import React from 'react';
import CarsForSaleResultsContainer from './CarsForSaleResultsContainer';
import CarValueResultGraphContainer from './CarValueResultGraphContainer';
import { connect } from 'react-redux';


/////// HERE FOR FUTURE SCALABILITY ///////
class ResultsContainer extends React.Component {

    state = {
        attr: null
    }

    funcName = (e) => {
        console.log(e.target.value)
    }

    render() {
        return (
			<div>
				<CarsForSaleResultsContainer />
				<CarValueResultGraphContainer />
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);
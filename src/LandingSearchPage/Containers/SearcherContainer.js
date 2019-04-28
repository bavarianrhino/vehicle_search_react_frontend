import React from 'react';
import CarsForSaleSearchForm from '../Components/CarsForSaleSearchForm';
import CarValueSearchForm from '../Components/CarValueSearchForm';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';


class Searcher extends React.Component {

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
				<CarsForSaleSearchForm />
                <CarValueSearchForm />
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

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);
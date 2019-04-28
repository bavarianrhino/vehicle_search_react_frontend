import React from 'react';
import CarsForSaleResultsContainer from './CarsForSaleResultsContainer';
import CarValueResultsContainer from './CarValueResultsContainer';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';


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
                {this.funcName}
                <CarsForSaleResultsContainer />
                <CarValueResultsContainer />
            </div>
        )
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
import React from 'react';
import CarValueResultGraph from '../Components/CarValueResultGraph';

import { fetchValuesForCars } from '../../Actions/CarValueActions';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';


class CarValueResultGraphContainer extends React.Component {

    state = {
        attr: null
    }

    funcName = (e) => {
        console.log(e.target.value)
    }

    render() {
        return (
            <div>
                <CarValueResultGraph />
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
    fetchValuesForCars: (data) => fetchValuesForCars(data)(dispatch)
    // functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

export default connect(mapStateToProps, mapDispatchToProps)(CarValueResultGraphContainer);
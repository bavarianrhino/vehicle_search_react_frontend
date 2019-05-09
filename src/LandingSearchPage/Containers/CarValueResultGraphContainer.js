import React from 'react';
import CarValueResultGraph from '../Components/CarValueResultGraph';

import { fetchValuesForCars } from '../../Actions/CarValueActions';
import { connect } from 'react-redux';

class CarValueResultGraphContainer extends React.Component {

    render() {
        return (
            <div>
                {this.props.begin_plot ? <CarValueResultGraph /> : null}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
		begin_plot: state.values.begin_plot
	};
}
const mapDispatchToProps = (dispatch) => ({
    fetchValuesForCars: (data) => fetchValuesForCars(data)(dispatch)
    // functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

export default connect(mapStateToProps, mapDispatchToProps)(CarValueResultGraphContainer);
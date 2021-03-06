import React from 'react';
import CarsForSaleResultList from '../Components/CarsForSaleResultList';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';

/////// HERE FOR FUTURE SCALABILITY ///////
class CarsForSaleResultsContainer extends React.Component {

    state = {
        attr: null
    }

    funcName = (e) => {
        console.log(e.target.value)
    }

    render() {
        return (
            <div>
                <CarsForSaleResultList />
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

export default connect(mapStateToProps, mapDispatchToProps)(CarsForSaleResultsContainer);
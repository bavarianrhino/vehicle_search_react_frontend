import React from 'react';
import FavCarsForSaleCard from './FavCarsForSaleCard';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';


class FavCarsForSaleList extends React.Component {

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
                <FavCarsForSaleCard />
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

export default connect(mapStateToProps, mapDispatchToProps)(FavCarsForSaleList);

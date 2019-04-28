import React from 'react';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';


const CarValueResultGraph = (props) => {
    
    return (
        <div>
            <p>GRAPH GOES HERE</p>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        attr: state.attr
    }
}

const mapDispatchToProps = (dispatch) => ({
    functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

export default connect(mapStateToProps, mapDispatchToProps)(CarValueResultGraph);
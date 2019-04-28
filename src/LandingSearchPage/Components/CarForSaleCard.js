import React from 'react';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';


const CarForSaleCard = (props) => {
    
    return (
		<div>
			<p>Make</p>
			<p>Model</p>
			<p>Year</p>
            <img src="https://via.placeholder.com/300.png/ff0000" alt='car' />
		</div>
	);
}


const mapStateToProps = (state) => {
    return {
        attr: state.attr
    }
}

const mapDispatchToProps = (dispatch) => ({
    functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

export default connect(mapStateToProps, mapDispatchToProps)(CarForSaleCard);
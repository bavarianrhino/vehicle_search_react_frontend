import React from 'react';
import CarsForSaleSearchForm from '../Components/CarsForSaleSearchForm';
// import CarValueSearchForm from '../Components/CarValueSearchForm';
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
				<CarsForSaleSearchForm />
                
			</div>
		);
    }
}
/* <CarValueSearchForm />; */
                //                 const panes = [
                //   { menuItem: 'New Cars', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
                //   { menuItem: 'Used Cars', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
                //   { menuItem: '', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
                // ]
                
                // const TabExampleSecondaryPointing = () => (
                //   <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

const mapStateToProps = (state) => {
    return {
        attr: state.attr
    }
}

const mapDispatchToProps = (dispatch) => ({
    functionName: (param) => dispatch({ type: 'ACTION_NAME', param })
})

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);
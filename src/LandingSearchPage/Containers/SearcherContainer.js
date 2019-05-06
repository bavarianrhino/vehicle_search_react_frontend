import React from 'react';
import UsedCarsForSaleSearchForm from '../Components/UsedCarsForSaleSearchForm';
import NewCarsForSaleSearchForm from '../Components/NewCarsForSaleSearchForm';

import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';


class Searcher extends React.Component {

    state = {
        attr: null
    }

    funcName = (e) => {
        console.log(e.target.value)
    }
    
    render() {

        const panes = [
            { menuItem: 'New Cars', render: () => <Tab.Pane attached={false}><NewCarsForSaleSearchForm /></Tab.Pane> },
            { menuItem: 'Used Cars', render: () => <Tab.Pane attached={false}><UsedCarsForSaleSearchForm /></Tab.Pane> },
            { menuItem: 'Search Cars by VIN', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
        ]

        return (
			<div>
                <Tab menu={{ color: 'teal', secondary: true, pointing: true }} panes={panes} />
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
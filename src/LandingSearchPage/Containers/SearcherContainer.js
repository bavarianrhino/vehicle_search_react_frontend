import React from 'react';
import NewCarsForSaleSearchForm from '../Components/NewCarsForSaleSearchForm';
import UsedCarsForSaleSearchForm from '../Components/UsedCarsForSaleSearchForm';

import { connect } from 'react-redux';
import { setActiveRenderResults } from '../../Actions/UserActions'
import { Tab } from 'semantic-ui-react';


class Searcher extends React.Component {

    state = {
        activeIndex: this.props.activeIndex
    }

    handleTabChange = (e, { activeIndex }) => {
        this.setState({ activeIndex }, console.log(activeIndex))
        this.props.setActiveRenderResults(activeIndex)
    }
    
    render() {

        const panes = [
            { menuItem: 'New Cars', render: () => <Tab.Pane renderActiveOnly={true} attached={false}><NewCarsForSaleSearchForm /></Tab.Pane> },
            { menuItem: 'Used Cars', render: () => <Tab.Pane renderActiveOnly={true} attached={false}><UsedCarsForSaleSearchForm /></Tab.Pane> },
            { menuItem: 'Search Cars by VIN', render: () => <Tab.Pane renderActiveOnly={true} attached={false}>Tab 3 Content</Tab.Pane> },
        ]

        return (
			<div>
                <Tab menu={{ color: 'teal', secondary: true, pointing: true }} activeIndex={this.activeIndex} onTabChange={this.handleTabChange} panes={panes} />
			</div>
		);
    }
}

const mapStateToProps = (state) => {
    return {
		activeIndex: state.user.activeTab
	};
}

export default connect(mapStateToProps, { setActiveRenderResults })(Searcher);
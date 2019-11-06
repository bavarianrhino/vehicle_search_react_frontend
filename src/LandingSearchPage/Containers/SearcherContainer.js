import React from 'react';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';
import { setActiveRenderResults } from '../../Actions/UserActions';
import CarValueSearchForm from '../Components/CarValueSearchForm';
import CarVINSearchForm from '../Components/CarVINSearchForm.js';
import NewCarsForSaleSearchForm from '../Components/NewCarsForSaleSearchForm';
import UsedCarsForSaleSearchForm from '../Components/UsedCarsForSaleSearchForm';



class Searcher extends React.Component {

    state = {
        activeIndex: this.props.activeIndex
    }

    handleTabChange = (e, { activeIndex }) => {
        this.setState({ activeIndex }
            // , console.log(activeIndex)
            )
        this.props.setActiveRenderResults(activeIndex)
    }
    
    render() {

        const panes = [
            { menuItem: 'New Cars', render: () => <Tab.Pane renderActiveOnly={true} attached={false}><NewCarsForSaleSearchForm /></Tab.Pane> },
            { menuItem: 'Used Cars', render: () => <Tab.Pane renderActiveOnly={true} attached={false}><UsedCarsForSaleSearchForm /></Tab.Pane> },
            { menuItem: 'Search Cars by VIN', render: () => <Tab.Pane renderActiveOnly={true} attached={false}><CarVINSearchForm /></Tab.Pane> },
            { menuItem: 'Used Vehicle Values', render: () => <Tab.Pane renderActiveOnly={true} attached={false}><CarValueSearchForm /></Tab.Pane> },
        ]

        return (
			<div>
                <Tab menu={{ color: 'teal', secondary: true, pointing: true }} 
                    activeIndex={this.activeIndex} 
                    onTabChange={this.handleTabChange} 
                    panes={panes} />
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
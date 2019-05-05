import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SearcherContainer from './SearcherContainer';
import ResultsContainer from './ResultsContainer';
import { connect } from 'react-redux';

import { Container, Segment } from 'semantic-ui-react';

class LandingSearchPage extends React.Component {

	render() {
		return (
			<div>
				<NavBar />
				<Segment vertical style={{ margin: '4.4em 0em 0em', padding: '5em 0em' }}>
					<Container textAlign='center' style={{ background: 'url(../../Images/vwBusDesert.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
						<SearcherContainer />
						<ResultsContainer />
					</Container>
				</Segment>
			</div>
		);
	}
}


export default connect()(LandingSearchPage);

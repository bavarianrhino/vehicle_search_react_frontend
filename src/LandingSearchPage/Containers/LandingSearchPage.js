import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SearcherContainer from './SearcherContainer';
import ResultsContainer from './ResultsContainer';
import { connect } from 'react-redux';


// import { fetchFavorites } from '../../Actions/FavoritesActions';
// import { landFavorites } from '../../Actions/FavoritesActions';
import { Container, Divider, Segment } from 'semantic-ui-react';

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

/* <Header
as='h1'
content='Landing Quote'
style={{
    fontSize: '4em',
    fontWeight: 'normal',
    marginBottom: 0,
    marginTop: '0em'
}}
/>
<Header
as='h2'
content='I Do What I want'
style={{
    fontSize: '1.7em',
    fontWeight: 'normal',
    marginTop: '0.5em'
}}
/>
<Button primary size='huge'>
Get Started
<Icon name='right arrow' />
</Button>
</Container>

<Divider inverted section />

<Grid divided stackable>
<Grid.Column width={8}>
<Header as='h4' content='Search Cars For Sale' />
<Button fluid content='Go' icon='right arrow' labelPosition='right' style={{ width: '50%', margin: 'auto' }} onClick />
</Grid.Column>
<Grid.Column width={8}>
<Header as='h4' content='Find Car Values' />
<Button fluid content='Go' icon='right arrow' labelPosition='right' style={{ width: '50%', margin: 'auto' }} />
</Grid.Column>
</Grid> */
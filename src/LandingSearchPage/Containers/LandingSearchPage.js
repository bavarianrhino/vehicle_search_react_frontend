import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SearcherContainer from './SearcherContainer';
import ResultsContainer from './ResultsContainer';
import { connect } from 'react-redux';

// import { } from 'semantic-ui-react';


class LandingSearchPage extends React.Component {

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
                <NavBar />
                <SearcherContainer />
                <ResultsContainer />
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

export default connect(mapStateToProps, mapDispatchToProps)(LandingSearchPage);
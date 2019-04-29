import React from 'react';
import { connect } from 'react-redux';

import { Form } from 'semantic-ui-react';

const yearOptions = [{ key: '91', text: '1991', value: '1991' }, { key: '92', text: '1992', value: '1992' }];
const distanceOptions = [{ key: '50', text: '50 Miles', value: '50' }, { key: '75', text: '75 Miles', value: '75' }];


class CarsForSaleSearchForm extends React.Component {

    state = {
        attr: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group widths='equal'>
						<Form.Input fluid label='Make' placeholder='Make' name='make' onChange={this.handleChange} />
						<Form.Input fluid label='Model' placeholder='Model' name='model' onChange={this.handleChange} />
						<Form.Select fluid label='Year' options={yearOptions} placeholder='Year' name='year' onChange={this.handleChange} />
						<Form.Input fluid label='Zip Code' placeholder='Zip Code' name='zip' onChange={this.handleChange} />
						<Form.Select fluid label='Distance' options={distanceOptions} placeholder='Distance' name='distance' onChange={this.handleChange} />
					</Form.Group>
					<Form.Button type='submit'>Submit</Form.Button>
				</Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(CarsForSaleSearchForm);
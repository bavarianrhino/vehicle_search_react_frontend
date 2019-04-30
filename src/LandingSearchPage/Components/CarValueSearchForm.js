import React from 'react';

import { getCarValueByVIN } from '../../Services/APIFetchs';
// import { setCarValues } from '../../Actions/AllActions';
// import { setCarValues, fetchCarValues } from '../../Actions/AllActions';
import { connect } from 'react-redux';

import { Form } from 'semantic-ui-react';


class CarValueSearchForm extends React.Component {
	state = {
		vin: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
        getCarValueByVIN(this.state.vin).then((payload) => {
            console.log(payload)
            // setCarValues(payload)
        })
        // fetchCarValues(this.state.vin).then((payload) => {
		// getCarValueByVIN(this.state.vin).then((payload) => {
		// 	console.log(payload);
		// });
		e.target.reset();
	};

	handleReset = () => {
		this.setState({
			username: '',
			password: '',
			error: null
		});
	};

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
					<Form.Group widths='equal'>
						<Form.Input fluid label='VIN' placeholder='VIN' type='text' name='vin' onChange={this.handleChange} />
					</Form.Group>
					<Form.Button type='submit'>Submit</Form.Button>
				</Form>
			</div>
		);
	}
}

export default connect(null, { })(CarValueSearchForm);
// export default connect(null, { setCarValues, fetchCarValues })(CarValueSearchForm);
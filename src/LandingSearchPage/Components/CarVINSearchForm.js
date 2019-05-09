

	// state = {
        // 	loadingform: false,
	// 	loadingformgroup: true,
	// 	form_loading: true,
	// 	radius_loading: true,
	// 	year_loading: false,
	// 	make_loading: false,
	// 	model_loading: false,
	// 	trim_loading: false,
	// 	year_disabled: true,
	// 	make_disabled: true,
	// 	model_disabled: true,
	// 	trim_disabled: true,
	// 	radius_options: [],
	// 	year_options: [],
	// 	make_options: [],
	// 	model_options: [],
	// 	trim_options: [],
	// 	radius: '',
	// 	year: '',
	// 	make: '',
	// 	model: '',
	// 	trim: '',
	// 	lat: this.props.latitude,
	// 	long: this.props.longitude,
	// 	built_data: []
	// };
    
	// componentDidMount() {
        // 	let location = {
            // 		lat: this.props.latitude,
            // 		long: this.props.longitude,
            // 		miles: '200'
            // 	};
            // 	this.props.fetchYearsForNewCarsForSale(location).then((res) => {
                // 		this.setState({
                    // 			...this.state,
                    // 			form_loading: !this.state.form_loading,
                    // 			radius_loading: !this.state.radius_loading,
	// 			radius: '200',
	// 			radius_options: distanceRadiusMiles,
	// 			year_options: this.props.facet_years
	// 		});
	// 	});
	// }

	// handleMakeLoading = () => {
        // 	this.setState({ ...this.state, make_loading: !this.state.make_loading });
        // };
        
        // // toggleMakeDisabled = () => {
            // // 	this.setState({ ...this.state, make_disabled: !this.state.make_disabled });
	// // };
	

	// handleChangeRadius = (e, { value }) => {
	// 	let str = value;
	// 	let location = {
	// 		lat: this.props.latitude,
	// 		long: this.props.longitude,
	// 		miles: str
	// 	};
	// 	this.handleYearLoading();
	// 	this.props
	// 		.fetchYearsForNewCarsForSale(location)
	// 		.then((res) => {
        // 			// console.log(this.state.year_disabled);
	// 			this.setState({
        // 				...this.state,
        // 				year_disabled: false,
	// 				make_disabled: true,
	// 				model_disabled: true,
	// 				trim_disabled: true,
	// 				year_options: this.props.facet_years,
	// 				make_options: [],
	// 				model_options: [],
	// 				trim_options: [],
	// 				radius: location.miles,
	// 				year: '',
	// 				make: '',
	// 				model: '',
	// 				trim: ''
	// 			});
	// 		})
	// 		.then((res) => this.handleYearLoading());
	// 	// console.log(this.state.year_disabled);
	// };
    
    
	// handleSubmit = (e) => {
        // 	e.preventDefault();
        // 	this.setState({
            // 		...this.state,
            // 		built_data: this.state,
            // 		button_disabled: false,
            // 		button_loading: true
            // 	});
            // 	this.props.fetchNewCarsForSale(this.state.built_data);
            // 	e.target.reset();
            // };

            /* <Form onSubmit={this.handleSubmit} onReset={this.handleReset} loading={this.state.loadingform}>
            <Form.Group widths='equal' loading={this.state.loadingformgroup.toString()}>
            <Form.Select loading={this.state.radius_loading ? true : false} disabled={this.state.radius_disabled ? true : false} onChange={this.handleChangeRadius} options={this.state.radius_options} label='Mile Radius' placeholder='Choose Distance' selection name='radius' />
            <Form.Input loading={this.state.year_loading ? true : false} disabled={this.state.year_disabled ? true : false} onChange={this.handleVIN} label='Enter VIN' placeholder='Enter VIN...' name='vin' />
</Form.Group>
<Form.Button type='submit'>Submit</Form.Button>
</Form> */

import React from 'react';

import { getCarValueByVIN } from '../../Actions/CarValueActions';
import { distanceRadiusMiles } from '../../Data/MileRadiusDistance';
import { connect } from 'react-redux';

import { Form } from 'semantic-ui-react';


class CarVINSearchForm extends React.Component {
	state = {
        vin: '',
        radius_options: null,
        radius: '200'
	};

	componentDidMount() {
		this.setState({
			radius_options: distanceRadiusMiles
		});
	}

	handleChangeRadius = (e) => {
		this.setState({
			radius: e.target.value
		});
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		getCarValueByVIN(this.state.vin).then((payload) => {
			console.log(payload);
			// setCarValues(payload)
		});
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
						<Form.Select loading={this.state.radius_loading ? true : false} disabled={this.state.radius_disabled ? true : false} onChange={this.handleChangeRadius} options={this.state.radius_options} label='Mile Radius' placeholder='Choose Distance' selection name='radius_options' />
						<Form.Input fluid label='VIN' placeholder='VIN' type='text' name='vin' onChange={this.handleChange} />
					</Form.Group>
					<Form.Button type='submit'>Submit</Form.Button>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		latitude: state.user.latitude,
		longitude: state.user.longitude
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// fetchCarsVIN: (data) => fetchCarsVIN(data)(dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CarVINSearchForm);


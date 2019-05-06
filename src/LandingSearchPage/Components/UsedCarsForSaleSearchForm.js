import React from 'react';
import { connect } from 'react-redux';
// import { carMakes } from '../../Data/CarModelData';
// import { carYear } from '../../Data/CarYearData';
// import { fetchCarsForSale } from '../../Services/APIFetchs';
import { fetchUsedCarsForSale } from '../../Actions/CarsActions';
import { fetchYearsForUsedCarsForSale } from '../../Actions/CarsActions';
import { fetchMakesForUsedCarsForSale } from '../../Actions/CarsActions';
import { fetchModelsForUsedCarsForSale } from '../../Actions/CarsActions';
import { fetchTrimsForUsedCarsForSale } from '../../Actions/CarsActions';
// import { landCarsForSale } from '../../Actions/AllActions';

import { Form } from 'semantic-ui-react';

const distanceOptions = [{ key: '1', text: '50 Miles', value: '50' }, { key: '2', text: '100 Miles', value: '100' }, { key: '3', text: '200 Miles', value: '200' }, { key: '4', text: '500 Miles', value: '500' }, { key: '5', text: '1000 Miles', value: '1000' }];
// const modelOptions = [{ key: '1', text: '7 Series', value: '7%20series' }, { key: '2', text: '5 Series', value: '5%20series' }];

class UsedCarsForSaleSearchForm extends React.Component {
	state = {
		form_loading: true,
		radius_loading: true,
		year_loading: false,
		make_loading: false,
		model_loading: false,
		trim_loading: false,
		// radius_disabled: false,
		year_disabled: true,
		make_disabled: true,
		model_disabled: true,
		trim_disabled: true,
		radius_options: [],
		year_options: [],
		make_options: [],
		model_options: [],
		trim_options: [],
		radius: '',
		year: '',
		make: '',
		model: '',
		trim: ''
	};

	componentDidMount() {
		let location = {
			lat: this.props.latitude,
			long: this.props.longitude
			// miles: this.state.radius
		};
		// this.props.fetchYearsForUsedCarsForSale(location).then((res) => {
		this.setState({
			...this.state,
			form_loading: !this.state.form_loading,
			radius_options: distanceOptions,
			// year_options: this.props.facet_years,
			radius_loading: !this.state.radius_loading
		});
		// });
	}

	handleFormLoading = () => {
		this.setState({ ...this.state, form_loading: !this.state.form_loading });
	};
	handleYearLoading = () => {
		this.setState({ ...this.state, year_loading: !this.state.year_loading });
	};
	handleMakeLoading = () => {
		this.setState({ ...this.state, make_loading: !this.state.make_loading });
	};
	handleModelLoading = () => {
		this.setState({ ...this.state, model_loading: !this.state.model_loading });
	};
	handleTrimLoading = () => {
		this.setState({ ...this.state, trim_loading: !this.state.trim_loading });
	};
    toggleFormDisabled = () => {
		this.setState({ ...this.state, form_disabled: !this.state.form_disabled });
	};
    toggleYearDisabled = () => {
		this.setState({ ...this.state, year_disabled: !this.state.year_disabled });
	};
    toggleMakeDisabled = () => {
		this.setState({ ...this.state, make_disabled: !this.state.make_disabled });
	};
    toggleModelDisabled = () => {
		this.setState({ ...this.state, model_disabled: !this.state.model_disabled });
	};
    toggleTrimDisabled = () => {
		this.setState({ ...this.state, trim_disabled: !this.state.trim_disabled });
	};

	handleChangeRadius = (e, { value }) => {
		let str = value;
		let location = {
			lat: this.props.latitude,
			long: this.props.longitude,
			miles: str
        };
        this.handleYearLoading();
        console.log(this.state.year_disabled);
		this.props
			.fetchYearsForUsedCarsForSale(location)
			.then((res) => this.toggleYearDisabled())
			.then((res) => {
				this.setState({
					...this.state,
					year_options: this.props.facet_years,
					make_options: [],
					model_options: [],
					trim_options: [],
					radius: value,
					year: '',
					make: '',
					model: '',
					trim: ''
				});
			})
			.then((res) => this.handleYearLoading());
	};

	handleChangeYear = (e, { value }) => {
		let year = value;
		let data = {
			lat: this.props.latitude,
			long: this.props.longitude,
			miles: this.state.radius,
			year: year
        };
		this.handleMakeLoading();
		this.props
            .fetchMakesForUsedCarsForSale(data)
            .then((res) => this.toggleMakeDisabled())
			.then((res) => {
				this.setState({
					...this.state,
					make_options: this.props.facet_makes,
					model_options: [],
					trim_options: [],
					year: year,
					make: '',
					model: '',
					trim: ''
				});
			})
			.then((res) => this.handleMakeLoading());
	};

	handleChangeMake = (e, { value }) => {
		let make = value;
		let data = {
			lat: this.props.latitude,
			long: this.props.longitude,
			miles: this.state.radius,
			year: this.state.year,
			make: make
        };
		this.handleModelLoading();
		this.props
        .fetchModelsForUsedCarsForSale(data)
            .then((res) => this.toggleModelDisabled())
			.then((res) => {
				this.setState({
					...this.state,
					model_options: this.props.facet_models,
					trim_options: [],
					make: make,
					model: '',
					trim: ''
				});
			})
			.then((res) => this.handleModelLoading());
	};

	handleChangeModel = (e, { value }) => {
		let model = value;
		let data = {
			lat: this.props.latitude,
			long: this.props.longitude,
			miles: this.state.radius,
			year: this.state.year,
			make: this.state.make,
			model: this.state.model
        };
		this.handleTrimLoading();
		this.props
			.fetchTrimsForUsedCarsForSale(data)
			.then((res) => this.toggleTrimDisabled())
			.then((res) => {
				this.setState({
					...this.state,
					trim_options: this.props.facet_trims,
					model: model,
					trim: ''
				});
			})
			.then((res) => this.handleTrimLoading());
	};

	handleChangeTrim = (e, { value }) => {
		let trim = value;
		let data = {
			lat: this.props.latitude,
			long: this.props.longitude,
			miles: this.state.radius,
			year: this.state.year,
			make: this.state.make,
			model: this.state.model,
			trim: trim
		};
		this.handleTrimLoading();
		// this.props.fetchUsedForUsedCarsForSale(data).then((res) => {
		// this.setState({...this.state, trim: trim});
		// })
	};

	// handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	this.props.fetchUsedCarsForSale(this.state);
	// 	e.target.reset();
	// };

	// handleYearMakeSubmit = ()

	// handleSubmit1 = (e) => {
	// e.preventDefault();
	// fetchUsedCarsForSale(this.state).then((payload) => {
	// console.log(payload)
	// landCarsForSale(payload);
	// });
	// e.target.reset();
	// };

	// handleReset = () => {
	// this.setState({
	// 	year: null,
	// 	make: '',
	// 	model: ''
	// });
	// };

	// fetchYearsForUsedCarsForSale() {}

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit} onReset={this.handleReset} loading={this.state.loading}>
					<Form.Group widths='equal'>
						<Form.Select loading={this.state.radius_loading} disabled={this.state.radius_disabled} onChange={this.handleChangeRadius} options={this.state.radius_options} label='Mile Radius' placeholder='Choose Distance' selection name='radius' />
						<Form.Select loading={this.state.year_loading} disabled={this.state.year_disabled} onChange={this.handleChangeYear} options={this.state.year_options} label='Choose Year' placeholder='Choose Year' selection name='year' />
						<Form.Select loading={this.state.make_loading} disabled={this.state.make_disabled} onChange={this.handleChangeMake} options={this.state.make_options} label='Choose Make' placeholder='Choose Make' selection name='make' />
						<Form.Select loading={this.state.model_loading} disabled={this.state.model_disabled} onChange={this.handleChangeModel} options={this.state.model_options} label='Choose Model' placeholder='Choose Models' selection name='model' />
						<Form.Select loading={this.state.trim_loading} disabled={this.state.trim_disabled} onChange={this.handleChangeTrim} options={this.state.trim_options} label='Choose Trim' placeholder='Choose Trim' selection name='trim' />
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
		longitude: state.user.longitude,
		listings: state.cars.listings,
		facet_years: state.cars.facet_years,
        facet_makes: state.cars.facet_makes,
        facet_models: state.cars.facet_models,
        facet_trims: state.cars.facet_trims
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
		fetchUsedCarsForSale: (data) => fetchUsedCarsForSale(data)(dispatch),
        fetchYearsForUsedCarsForSale: (data) => fetchYearsForUsedCarsForSale(data)(dispatch),
        fetchMakesForUsedCarsForSale: (data) => fetchMakesForUsedCarsForSale(data)(dispatch),
        fetchModelsForUsedCarsForSale: (data) => fetchModelsForUsedCarsForSale(data)(dispatch),
        fetchTrimsForUsedCarsForSale: (data) => fetchTrimsForUsedCarsForSale(data)(dispatch)
		// openModal: (current) => dispatch(openModal(current))
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(UsedCarsForSaleSearchForm);
// export default connect(null, {landCarsForSale})(CarsForSaleSearchForm);

/* <Form onSubmit={this.handleSubmit}>
	<Form.Group widths='equal'>
		<Form.Input fluid label='Make' placeholder='Make' name='make' onChange={this.handleChange} />
		<Form.Input fluid label='Model' placeholder='Model' name='model' onChange={this.handleChange} />
		<Form.Select fluid label='Year' placeholder='Year' name='year' onChange={this.handleChange} />
		<Form.Input fluid label='Zip Code' placeholder='Zip Code' name='zip' onChange={this.handleChange} />
		<Form.Select fluid label='Distance' options={distanceOptions} placeholder='Distance' name='distance' onChange={this.handleChange} />
	</Form.Group>
	<Form.Button type='submit'>Submit</Form.Button>
</Form>; */

    // <Form.Input onChange={this.handleChangeZip} fluid label='Zip Code' placeholder='Zip Code' name='zip' />
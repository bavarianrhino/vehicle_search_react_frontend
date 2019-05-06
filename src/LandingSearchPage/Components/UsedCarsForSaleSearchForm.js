import React from 'react';
import { connect } from 'react-redux';
import { distanceRadiusMiles } from '../../Data/MileRadiusDistance';

import { fetchUsedCarsForSale } from '../../Actions/UsedCarsActions';
import { fetchYearsForUsedCarsForSale } from '../../Actions/UsedCarsActions';
import { fetchMakesForUsedCarsForSale } from '../../Actions/UsedCarsActions';
import { fetchModelsForUsedCarsForSale } from '../../Actions/UsedCarsActions';
import { fetchTrimsForUsedCarsForSale } from '../../Actions/UsedCarsActions';

import { Form } from 'semantic-ui-react';

class UsedCarsForSaleSearchForm extends React.Component {
	state = {
		form_loading: true,
		radius_loading: true,
		year_loading: false,
		make_loading: false,
		model_loading: false,
		trim_loading: false,
		button_loading: false,
		year_disabled: true,
		make_disabled: true,
		model_disabled: true,
		trim_disabled: true,
		button_disabled: true,
		radius_options: [],
		year_options: [],
		make_options: [],
		model_options: [],
		trim_options: [],
		radius: '',
		year: '',
		make: '',
		model: '',
        trim: '',
        built_data: []
	};

	componentDidMount() {
		let location = {
			lat: this.props.latitude,
			long: this.props.longitude,
			miles: '200'
		};
		this.props.fetchYearsForUsedCarsForSale(location).then((res) => {
			this.setState({
				...this.state,
				form_loading: !this.state.form_loading,
				radius_loading: !this.state.radius_loading,
				radius_options: distanceRadiusMiles,
				year_options: this.props.facet_years
			});
		});
	}
	// .then((res) => {
	//     this.props.toggleResultsBasedOnIndexedTab()
	// })

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
	// toggleFormDisabled = () => {
	// 	this.setState({ ...this.state, form_disabled: !this.state.form_disabled });
	// };
	// toggleYearDisabled = () => {
	// 	this.setState({ ...this.state, year_disabled: !this.state.year_disabled });
	// };
	// toggleMakeDisabled = () => {
	// 	this.setState({ ...this.state, make_disabled: !this.state.make_disabled });
	// };
	// toggleModelDisabled = () => {
	// 	this.setState({ ...this.state, model_disabled: !this.state.model_disabled });
	// };
	// toggleTrimDisabled = () => {
	// 	this.setState({ ...this.state, trim_disabled: !this.state.trim_disabled });
	// };

	handleChangeRadius = (e, { value }) => {
		let str = value;
		let location = {
			lat: this.props.latitude,
			long: this.props.longitude,
			miles: str
		};
		this.handleYearLoading();
		this.props
			.fetchYearsForUsedCarsForSale(location)
			.then((res) => {
				this.setState({
					...this.state,
					year_options: this.props.facet_years,
					year_disabled: false,
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
			.then((res) => {
				this.setState({
					...this.state,
					make_options: this.props.facet_makes,
					make_disabled: false,
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
			.then((res) => {
				this.setState({
					...this.state,
					model_options: this.props.facet_models,
					model_disabled: false,
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
			.then((res) => {
				this.setState({
					...this.state,
					trim_options: this.props.facet_trims,
					trim_disabled: false,
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
		// ==== LEAVE FUNCTIONS BELOW TO IMPLEMENT MORE FILTERS ==== //
		// this.handleTrimLoading();
		// this.props.fetchUsedForUsedCarsForSale(data).then((res) => {
		this.setState({ ...this.state, trim: trim });
	};

	handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            built_data: this.state,
            button_disabled: false,
            button_loading: true,
        })
        this.props.fetchUsedCarsForSale(this.state.built_data);
		e.target.reset();
	};

	handleReset = () => {
        console.warn("TRIED TO RESET IN USED CARS FORM!")
	// this.setState({
	// 	year: null,
	// 	make: '',
	// 	model: ''
	// });
	};

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
		listings: state.used_cars.listings,
		facet_years: state.used_cars.facet_years,
        facet_makes: state.used_cars.facet_makes,
        facet_models: state.used_cars.facet_models,
        facet_trims: state.used_cars.facet_trims
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
		fetchUsedCarsForSale: (data) => fetchUsedCarsForSale(data)(dispatch),
        fetchYearsForUsedCarsForSale: (data) => fetchYearsForUsedCarsForSale(data)(dispatch),
        fetchMakesForUsedCarsForSale: (data) => fetchMakesForUsedCarsForSale(data)(dispatch),
        fetchModelsForUsedCarsForSale: (data) => fetchModelsForUsedCarsForSale(data)(dispatch),
        fetchTrimsForUsedCarsForSale: (data) => fetchTrimsForUsedCarsForSale(data)(dispatch)
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(UsedCarsForSaleSearchForm);
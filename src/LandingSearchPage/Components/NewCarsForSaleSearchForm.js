import React from 'react';
import { connect } from 'react-redux';
import { distanceRadiusMiles } from '../../Data/MileRadiusDistance'

import { fetchNewCarsForSale } from '../../Actions/NewCarsActions';
import { fetchYearsForNewCarsForSale } from '../../Actions/NewCarsActions';
import { fetchMakesForNewCarsForSale } from '../../Actions/NewCarsActions';
import { fetchModelsForNewCarsForSale } from '../../Actions/NewCarsActions';
import { fetchTrimsForNewCarsForSale } from '../../Actions/NewCarsActions';

import { Form } from 'semantic-ui-react';

class NewCarsForSaleSearchForm extends React.Component {

	state = {
        loadingform: false,
        loadingformgroup: true,
		form_loading: true,
		radius_loading: true,
		year_loading: false,
		make_loading: false,
		model_loading: false,
		trim_loading: false,
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
			long: this.props.longitude,
			miles: '200'
		};
		this.props.fetchYearsForNewCarsForSale(location).then((res) => {
			this.setState({
				...this.state,
				form_loading: !this.state.form_loading,
				radius_loading: !this.state.radius_loading,
				radius: '200',
				radius_options: distanceRadiusMiles,
				year_options: this.props.facet_years
			});
		});
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
	// toggleFormDisabled = () => {
	// 	this.setState({ ...this.state, form_disabled: !this.state.form_disabled })
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
		this.props.fetchYearsForNewCarsForSale(location)
			.then((res) => {
                // console.log(this.state.year_disabled);
				this.setState({
					...this.state,
					year_disabled: false,
					make_disabled: true,
					model_disabled: true,
					trim_disabled: true,
					year_options: this.props.facet_years,
					make_options: [],
					model_options: [],
					trim_options: [],
					radius: location.miles,
					year: '',
					make: '',
					model: '',
					trim: ''
				});
			})
            .then((res) => this.handleYearLoading());
            // console.log(this.state.year_disabled);
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
		this.props.fetchMakesForNewCarsForSale(data)
			.then((res) => {
				this.setState({
					...this.state,
					make_disabled: false,
					model_disabled: true,
					trim_disabled: true,
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
		this.props.fetchModelsForNewCarsForSale(data)
			.then((res) => {
				this.setState({
					...this.state,
					model_disabled: false,
					trim_disabled: true,
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
			model: model
		};
		this.handleTrimLoading();
		this.props.fetchTrimsForNewCarsForSale(data)
			.then((res) => {
				this.setState({
                    ...this.state,
                    trim_disabled: false,
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
        // ==== LEAVE FUNCTIONS BELOW TO IMPLEMENT MORE FILTERS ==== //
		// this.handleTrimLoading();
		// this.props.fetchUsedForUsedCarsForSale(data).then((res) => {

		this.setState({...this.state, trim: trim});
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
		this.setState({
			...this.state,
			button_disabled: false,
			button_loading: true
		});
		this.props.fetchNewCarsForSale(this.state);
		e.target.reset();
    }

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit} onReset={this.handleReset} loading={this.state.loadingform}>
					<Form.Group widths='equal' loading={this.state.loadingformgroup.toString()}>
						<Form.Select loading={this.state.radius_loading ? true : false} disabled={this.state.radius_disabled ? true : false} onChange={this.handleChangeRadius} options={this.state.radius_options} label='Mile Radius' placeholder='Choose Distance' selection name='radius' />
						<Form.Select loading={this.state.year_loading ? true : false} disabled={this.state.year_disabled ? true : false} onChange={this.handleChangeYear} options={this.state.year_options} label='Choose Year' placeholder='Choose Year' selection name='year' />
						<Form.Select loading={this.state.make_loading ? true : false} disabled={this.state.make_disabled ? true : false} onChange={this.handleChangeMake} options={this.state.make_options} label='Choose Make' placeholder='Choose Make' selection name='make' />
						<Form.Select loading={this.state.model_loading ? true : false} disabled={this.state.model_disabled ? true : false} onChange={this.handleChangeModel} options={this.state.model_options} label='Choose Model' placeholder='Choose Models' selection name='model' />
						<Form.Select loading={this.state.trim_loading ? true : false} disabled={this.state.trim_disabled ? true : false} onChange={this.handleChangeTrim} options={this.state.trim_options} label='Choose Trim' placeholder='Choose Trim' selection name='trim' />
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
		listings: state.new_cars.listings,
		facet_years: state.new_cars.facet_years,
        facet_makes: state.new_cars.facet_makes,
        facet_models: state.new_cars.facet_models,
        facet_trims: state.new_cars.facet_trims
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
		fetchNewCarsForSale: (data) => fetchNewCarsForSale(data)(dispatch),
        fetchYearsForNewCarsForSale: (data) => fetchYearsForNewCarsForSale(data)(dispatch),
        fetchMakesForNewCarsForSale: (data) => fetchMakesForNewCarsForSale(data)(dispatch),
        fetchModelsForNewCarsForSale: (data) => fetchModelsForNewCarsForSale(data)(dispatch),
        fetchTrimsForNewCarsForSale: (data) => fetchTrimsForNewCarsForSale(data)(dispatch)
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(NewCarsForSaleSearchForm);

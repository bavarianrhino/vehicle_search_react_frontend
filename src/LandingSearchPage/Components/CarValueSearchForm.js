import React from 'react';
import { connect } from 'react-redux';
import { distanceRadiusMiles } from '../../Data/MileRadiusDistance';

import { fetchYearsForValuePlot } from '../../Actions/CarValueActions';
import { fetchMakesForValuePlot } from '../../Actions/CarValueActions';
import { fetchModelsForValuePlot } from '../../Actions/CarValueActions';
import { fetchValuesForCars } from '../../Actions/CarValueActions';

import { Grid, Form } from 'semantic-ui-react';

class CarValueSearchForm extends React.Component {
	state = {
		form_loading: true,
		radius_loading: true,
		year_loading: false,
		make_loading: false,
		model_loading: false,
		year_disabled: true,
		make_disabled: true,
		model_disabled: true,
		radius_options: [],
		year_options: [],
		make_options: [],
		model_options: [],
		radius: '',
		year: '',
		make: '',
		model: '',
		lat: this.props.latitude,
		long: this.props.longitude,
        built_data: [],
        button_disabled: true
	};

	componentDidMount() {
		let location = {
			lat: this.props.latitude,
			long: this.props.longitude,
			miles: '200'
		};
		this.props.fetchYearsForValuePlot(location).then((res) => {
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

	handleChangeRadius = (e, { value }) => {
		let str = value;
		let location = {
			lat: this.props.latitude,
			long: this.props.longitude,
			miles: str
		};
		this.handleYearLoading();
		this.props.fetchYearsForValuePlot(location)
			.then((res) => {
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
		this.props.fetchMakesForValuePlot(data)
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
		this.props
			.fetchModelsForValuePlot(data)
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
		this.setState({
			...this.state,
			trim_disabled: false,
            trim_options: this.props.facet_trims,
            button_disabled: false,
			model: data.model
        });
    }

    handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			...this.state,
			radius: this.state.radius,
			year: this.state.year,
			make: this.state.make,
			model: this.state.model,
			lat: this.state.latitude,
			long: this.state.longitude
        });
        let graphObj = { radius: this.state.radius, year: this.state.year, make: this.state.make, model: this.state.model, lat: this.state.latitude, long: this.state.longitude };
        this.setState({...this.state, built_data: graphObj})
        this.props.fetchValuesForCars(graphObj).then((res) => {
            console.log(res)
        })
	};

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<Grid columns={1}>
						<Grid.Column>
							<Form.Group widths='equal'>
								<Form.Select loading={this.state.radius_loading ? true : false} disabled={this.state.radius_disabled ? true : false} onChange={this.handleChangeRadius} options={this.state.radius_options} label='Mile Radius' placeholder='Choose Distance' selection name='radius' />
								<Form.Select loading={this.state.year_loading ? true : false} disabled={this.state.year_disabled ? true : false} onChange={this.handleChangeYear} options={this.state.year_options} label='Choose Year' placeholder='Choose Year' selection name='year' />
								<Form.Select loading={this.state.make_loading ? true : false} disabled={this.state.make_disabled ? true : false} onChange={this.handleChangeMake} options={this.state.make_options} label='Choose Make' placeholder='Choose Make' selection name='make' />
								<Form.Select loading={this.state.model_loading ? true : false} disabled={this.state.model_disabled ? true : false} onChange={this.handleChangeModel} options={this.state.model_options} label='Choose Model' placeholder='Choose Models' selection name='model' />								
							</Form.Group>
                            <Form.Button disabled={this.state.button_disabled ? true : false} type='submit'>Submit</Form.Button>
						</Grid.Column>
					</Grid>
				</Form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		latitude: state.user.latitude,
		longitude: state.user.longitude,
		fetch_count: state.values.fetch_count,
		listings: state.values.listings,
		facet_years: state.values.facet_years,
		facet_makes: state.values.facet_makes,
		facet_models: state.values.facet_models,
		facet_trims: state.values.facet_trims
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchYearsForValuePlot: (data) => fetchYearsForValuePlot(data)(dispatch),
		fetchMakesForValuePlot: (data) => fetchMakesForValuePlot(data)(dispatch),
		fetchModelsForValuePlot: (data) => fetchModelsForValuePlot(data)(dispatch),
		fetchValuesForCars: (data) => fetchValuesForCars(data)(dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CarValueSearchForm);

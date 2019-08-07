import React from 'react';
import { connect } from 'react-redux';
import { distanceRadiusMiles } from '../../Data/MileRadiusDistance'

import { fetchNewCarsForSale } from '../../Actions/NewCarsActions';
import { fetchYearsForNewCarsForSale } from '../../Actions/NewCarsActions';
import { fetchMakesForNewCarsForSale } from '../../Actions/NewCarsActions';
import { fetchModelsForNewCarsForSale } from '../../Actions/NewCarsActions';
import { upDateSliderListings } from '../../Actions/UserActions';
import { fetchTrimsForNewCarsForSale } from '../../Actions/NewCarsActions';

import { Dropdown, Grid, Form, Pagination, Segment, Input } from 'semantic-ui-react';

class NewCarsForSaleSearchForm extends React.Component {
	state = {
		last_form_group: 0,
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
		trim: '',
		lat: this.props.latitude,
		long: this.props.longitude,
		built_data: [],
        activePage: 0,
        activeStart: 0,
		boundaryRange: 1,
		siblingRange: 1,
		showEllipsis: true,
		showFirstAndLastNav: true,
		showPreviousAndNextNav: true,
        totalPages: 1,
        render_option: 10
	};

	componentDidMount() {
		let location = {
			lat: this.props.latitude,
			long: this.props.longitude,
			activePage: this.state.activePage,
			activeStart: this.state.activeStart,
			render_option: this.state.render_option,
			miles: '200'
		};
		this.props.fetchYearsForNewCarsForSale(location).then((res) => {
			this.setState({
				...this.state,
				last_form_group: 1,
				form_loading: !this.state.form_loading,
				radius_loading: !this.state.radius_loading,
				radius: '200',
				radius_options: distanceRadiusMiles,
				activeStart: this.state.activeStart,
				activePage: this.state.activePage,
				year_options: this.props.facet_years,
				boundaryRange: this.props.boundaryRange,
				siblingRange: this.props.siblingRange,
				totalPages: this.props.totalPages,
				render_option: this.props.render_option
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
			activePage: this.state.activePage,
			activeStart: this.state.activeStart,
			miles: str
		};
		this.handleYearLoading();
		this.props
			.fetchYearsForNewCarsForSale(location)
			.then((res) => {
				// console.log(this.state.year_disabled);
				this.setState({
					...this.state,
					last_form_group: 2,
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
					trim: '',
					activePage: this.props.activePage,
					activeStart: this.state.activeStart,
					boundaryRange: this.props.boundaryRange,
					siblingRange: this.props.siblingRange,
					totalPages: this.props.totalPages,
					render_option: this.props.render_option
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
			activeStart: this.state.activeStart,
			activePage: this.state.activePage,
			year: year
		};
		this.handleMakeLoading();
		this.props
			.fetchMakesForNewCarsForSale(data)
			.then((res) => {
				this.setState({
					...this.state,
					last_form_group: 3,
					make_disabled: false,
					model_disabled: true,
					trim_disabled: true,
					make_options: this.props.facet_makes,
					model_options: [],
					trim_options: [],
					year: year,
					make: '',
					model: '',
					trim: '',
					activeStart: this.state.activeStart,
					activePage: this.state.activePage,
					boundaryRange: this.props.boundaryRange,
					siblingRange: this.props.siblingRange,
					totalPages: this.props.totalPages,
					render_option: this.props.render_option
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
			activeStart: this.state.activeStart,
			activePage: this.state.activePage,
			make: make
		};
		this.handleModelLoading();
		this.props
			.fetchModelsForNewCarsForSale(data)
			.then((res) => {
				this.setState({
					...this.state,
					last_form_group: 4,
					model_disabled: false,
					trim_disabled: true,
					model_options: this.props.facet_models,
					trim_options: [],
					make: make,
					model: '',
					trim: '',
					activeStart: this.state.activeStart,
					activePage: this.state.activePage,
					boundaryRange: this.props.boundaryRange,
					siblingRange: this.props.siblingRange,
					totalPages: this.props.totalPages,
					render_option: this.props.render_option
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
			model: model,
			activeStart: this.state.activeStart,
			activePage: this.state.activePage,
			boundaryRange: this.props.boundaryRange,
			siblingRange: this.props.siblingRange,
			totalPages: this.props.totalPages,
			render_option: this.props.render_option
		};
        this.setState({
			...this.state,
			last_form_group: 5,
			trim_disabled: false,
			trim_options: this.props.facet_trims,
			model: data.model,
			trim: '',
			activeStart: data.activeStart,
			activePage: data.activePage,
			boundaryRange: data.boundaryRange,
			siblingRange: data.siblingRange,
			totalPages: data.totalPages,
			render_option: data.render_option
		});
		this.handleTrimLoading();
		this.props
			.fetchTrimsForNewCarsForSale(data)
			.then((res) => {
				this.setState({
					...this.state,
					last_form_group: 5,
					trim_disabled: false,
					trim_options: this.props.facet_trims,
					model: model,
					trim: '',
					activePage: this.props.activePage,
					boundaryRange: this.props.boundaryRange,
					siblingRange: this.props.siblingRange,
					totalPages: this.props.totalPages
				});
			})
			.then((res) => this.handleTrimLoading());
	};

	handleChangeTrim = (e, { value }) => {
		// let trim = value;
		// let data = {
		// 	lat: this.props.latitude,
		// 	long: this.props.longitude,
		// 	miles: this.state.radius,
		// 	year: this.state.year,
		// 	make: this.state.make,
		// 	model: this.state.model,
		// 	trim: trim
        // }
    }
	// ==== LEAVE FUNCTIONS BELOW TO IMPLEMENT MORE FILTERS ==== //
	// this.handleTrimLoading();
	// this.props.fetchUsedForUsedCarsForSale(data).then((res) => {

	// this.setState({ ...this.state, trim: trim });
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

	handlePaginationChange = (e, { activePage }) => {
        let newActivePage
        let newActiveStart = this.state.activeState
        if (activePage > this.state.activePage ){
            newActivePage = activePage + 1;
            newActiveStart+=50;
        } else {
            newActivePage = activePage - 1;
            newActiveStart-=50
        }
        this.setState({...this.state, activePage: newActivePage, activeStart: newActiveStart });
        // console.log(newActivePage);
        if(this.state.last_form_group === 2){
            let obj = {'value': this.state.radius}
            // console.log(obj)
            this.handleChangeRadius(obj)
        } else if (this.state.last_form_group === 3) {
            let obj = {'value': this.state.year}
            this.handleChangeYear(obj)
        } else if (this.state.last_form_group === 4) {
            let obj = {'value': this.state.make}
            this.handleChangeMake(obj)
        } else if (this.state.last_form_group === 5) {
            let obj = {'value': this.state.model}
            this.handleChangeModel(obj)   
        }
	}

	handleInputChange = (e, { value }) => {
        this.props.upDateSliderListings(value).then((res) => {
			this.setState({ render_option: value });
		});
    }

	render() {
		const { activePage, boundaryRange, siblingRange, showEllipsis, showFirstAndLastNav, showPreviousAndNextNav, totalPages, render_option } = this.state;
		return (
			<div>
				<Form onSubmit={this.handleSubmit} onReset={this.handleReset} loading={this.state.loadingform}>
					<Grid columns={1}>
						<Grid.Column>
							<Form.Group widths='equal' >
								<Form.Select loading={this.state.radius_loading ? true : false} disabled={this.state.radius_disabled ? true : false} onChange={this.handleChangeRadius} options={this.state.radius_options} label='Mile Radius' placeholder='Choose Distance' selection name='radius' />
								<Form.Select loading={this.state.year_loading ? true : false} disabled={this.state.year_disabled ? true : false} onChange={this.handleChangeYear} options={this.state.year_options} label='Choose Year' placeholder='Choose Year' selection name='year' />
								<Form.Select loading={this.state.make_loading ? true : false} disabled={this.state.make_disabled ? true : false} onChange={this.handleChangeMake} options={this.state.make_options} label='Choose Make' placeholder='Choose Make' selection name='make' />
								<Form.Select loading={this.state.model_loading ? true : false} disabled={this.state.model_disabled ? true : false} onChange={this.handleChangeModel} options={this.state.model_options} label='Choose Model' placeholder='Choose Models' selection name='model' />
								{/* <Form.Select loading={this.state.trim_loading ? true : false} disabled={this.state.trim_disabled ? true : false} onChange={this.handleChangeTrim} options={this.state.trim_options} label='Choose Trim' placeholder='Choose Trim' selection name='trim' /> */}
							</Form.Group>
						</Grid.Column>
						<Grid.Column>
							<Pagination
								activePage={activePage}
								boundaryRange={boundaryRange}
								onPageChange={this.handlePaginationChange}
								size='mini'
								siblingRange={siblingRange}
								totalPages={totalPages}
								// Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
								ellipsisItem={showEllipsis ? undefined : null}
								firstItem={showFirstAndLastNav ? undefined : null}
								lastItem={showFirstAndLastNav ? undefined : null}
								prevItem={showPreviousAndNextNav ? undefined : null}
								nextItem={showPreviousAndNextNav ? undefined : null}
							/>
						</Grid.Column>
					</Grid>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
		latitude: state.user.latitude,
        longitude: state.user.longitude,
        fetch_count: state.new_cars.fetch_count,
        activePage: state.new_cars.page_count,
        totalPages: state.new_cars.page_total,
        remainder_count: state.new_cars.remainder_count,
        render_option: state.new_cars.render_option,
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
        upDateSliderListings: (data) => upDateSliderListings(data)(dispatch),
        fetchTrimsForNewCarsForSale: (data) => fetchTrimsForNewCarsForSale(data)(dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCarsForSaleSearchForm);

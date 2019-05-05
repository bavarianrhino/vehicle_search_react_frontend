import React from 'react';
import { connect } from 'react-redux';
import { carMakes } from '../../Data/CarModelData';
import { carYear } from '../../Data/CarYearData';
// import { fetchCarsForSale } from '../../Services/APIFetchs';
import { fetchUsedCarsForSale } from '../../Actions/CarsActions';
// import { landCarsForSale } from '../../Actions/AllActions';

import { Form } from 'semantic-ui-react';

const distanceOptions = [{ key: '1', text: '50 Miles', value: '50' }, { key: '2', text: '100 Miles', value: '100' }, { key: '3', text: '200 Miles', value: '200' }, { key: '4', text: '500 Miles', value: '500' }, { key: '5', text: '1000 Miles', value: '1000' }];
const modelOptions = [{ key: '1', text: '7 Series', value: '7%20series' }, { key: '2', text: '5 Series', value: '5%20series' }];

class UsedCarsForSaleSearchForm extends React.Component {

	state = {
		year: '',
		make: '',
		model: '',
		miles: '',
		zip: ''
	};

	handleChangeYear = (e, { value }) => {
		let str = value;
		this.setState({ ...this.state, year: str });
	};

	handleChangeMake = (e, { value }) => {
		let str = value;
		this.setState({ ...this.state, make: str });
	};

	handleChangeModel = (e, { value }) => {
		let str = value;
		this.setState({ ...this.state, model: str });
	};

	handleChangeMiles = (e, { value }) => {
		let str = value;
		this.setState({ ...this.state, miles: str });
	};

	handleChangeZip = (e) => {
		this.setState({ ...this.state, zip: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.fetchUsedCarsForSale(this.state);
		e.target.reset();
	};

	// handleSubmit1 = (e) => {
	// e.preventDefault();
	// fetchUsedCarsForSale(this.state).then((payload) => {
	// console.log(payload)
	// landCarsForSale(payload);
	// });
	// e.target.reset();
	// };

	handleReset = () => {
		// this.setState({
		// 	year: null,
		// 	make: '',
		// 	model: ''
		// });
	};

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
					<Form.Group widths='equal'>
						<Form.Select onChange={this.handleChangeYear} options={carYear.years} label='Choose Year' placeholder='Choose Year' selection name='year' />
						<Form.Select onChange={this.handleChangeMake} options={carMakes.makes} label='Choose Make' placeholder='Choose Make' selection name='make' />
						<Form.Select onChange={this.handleChangeModel} options={modelOptions} label='Choose Model' placeholder='Choose Models' selection name='model' />
						<Form.Select onChange={this.handleChangeMiles} options={distanceOptions} label='Mile Radius' placeholder='Choose Mile Radius' selection name='radius' />
						<Form.Input onChange={this.handleChangeZip} fluid label='Zip Code' placeholder='Zip Code' name='zip' />
					</Form.Group>
					<Form.Button type='submit'>Submit</Form.Button>
				</Form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsedCarsForSale: (data) => fetchUsedCarsForSale(data)(dispatch)
		// openModal: (current) => dispatch(openModal(current))
	};
};

export default connect(null,mapDispatchToProps)(UsedCarsForSaleSearchForm);
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

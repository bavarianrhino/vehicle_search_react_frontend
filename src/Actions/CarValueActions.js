
// import { LOCALHOST } from '../Data/GlobalVars';
import { COORS } from '../Data/GlobalVars'
import { MCAPIKEY } from '../Data/GlobalVars';
// import { MCSALES } from '../Data/GlobalVars'
import { MCSEARCH } from '../Data/GlobalVars'
import { USED } from '../Data/GlobalVars'
// import { NEW } from '../Data/GlobalVars'
import { LAT } from '../Data/GlobalVars'
import { LONG } from '../Data/GlobalVars'
import { YEAR } from '../Data/GlobalVars'
import { MAKE } from '../Data/GlobalVars'
import { MODEL } from '../Data/GlobalVars'
// import { TRIM } from '../Data/GlobalVars'
// import { ZIP } from '../Dat÷a/GlobalVars'
import { RADIUS } from '../Data/GlobalVars'
// import { START } from '../Data/GlobalVars'
// import { ROWS_10 } from '../Data/GlobalVars'
// import { ROWS_25 } from '../Data/GlobalVars'
// import { ROWS_50 } from '../Data/GlobalVars'
// import { PHOTOS } from '../Data/GlobalVars'
import { PLOT } from '../Data/GlobalVars'


export const fetchValuesForCars = (data) => {
	console.log(data);
	return (dispatch) => {
		dispatch({ type: 'LOADING_VALUES' });
		return fetch(`${COORS}${MCSEARCH}${MCAPIKEY}${USED}${YEAR}${data.year}${MAKE}${data.make}${MODEL}${data.model}${PLOT}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
			.then((res) => res.json())
			.then((json) => dispatch({ type: 'LANDING_VALUES', json }));
	};
};


export const fetchYearsForValuePlot = (location) => {
	console.log(location.activePage);
	console.log(location.activeStart);
	return (dispatch) => {
		dispatch({ type: 'LOADING_NEW_CARS' });
		return fetch(`${COORS}${MCSEARCH}${MCAPIKEY}${LONG}${location.long}${LAT}${location.lat}${RADIUS}${location.miles}&facets=year|0|60`, {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
			.then((res) => res.json())
			.then((payload) => dispatch({ type: 'LAND_NEW_YEARS', payload }));
	};
};

export const fetchMakesForValuePlot = (data) => {
	console.log(data);
	return (dispatch) => {
		dispatch({ type: 'LOADING_NEW_CARS' });
		return fetch(`${COORS}${MCSEARCH}${MCAPIKEY}${LONG}${data.long}${LAT}${data.lat}${RADIUS}${data.miles}${YEAR}${data.year}&facets=make|0|60`, {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
			.then((res) => res.json())
			.then((payload) => dispatch({ type: 'LAND_NEW_MAKES', payload }));
	};
};

export const fetchModelsForValuePlot = (data) => {
	console.log(data);
	return (dispatch) => {
		dispatch({ type: 'LOADING_NEW_CARS' });
		return fetch(`${COORS}${MCSEARCH}${MCAPIKEY}${LONG}${data.long}${LAT}${data.lat}${RADIUS}${data.miles}${YEAR}${data.year}${MAKE}${data.make}&facets=model|0|60`, {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
			.then((res) => res.json())
			.then((payload) => dispatch({ type: 'LAND_NEW_MODELS', payload }));
	};
};

export const getCarValueByVIN = (data) => {
	console.log(data);
	return (dispatch) => {
		dispatch({ type: 'LOADING_VALUES' });
		return fetch(`${COORS}${MCSEARCH}${MCAPIKEY}${USED}${YEAR}${data.year}${MAKE}${data.make}${MODEL}${data.model}${PLOT}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
			.then((res) => res.json())
			.then((payload) => dispatch({ type: 'LANDING_VALUES', payload }));
	};
};

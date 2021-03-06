
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
import { TRIM } from '../Data/GlobalVars'
// import { ZIP } from '../Dat÷a/GlobalVars'
import { RADIUS } from '../Data/GlobalVars'
import { START } from '../Data/GlobalVars'
import { STARTO } from '../Data/GlobalVars';
import { ROWS_10 } from '../Data/GlobalVars'
// import { ROWS_25 } from '../Data/GlobalVars'
import { ROWS_50 } from '../Data/GlobalVars'
import { PHOTOS } from '../Data/GlobalVars'

// export const fetchCarsForSale = (data) => {
//     console.log(data);
//     return dispatch => {
//         dispatch({ type: 'LOADING_USED_CARS' });
//         return fetch(
// 			`${COORS}${MCSEARCH}${MCAPIKEY}${RADIUS}${data.miles}${ZIP}${data.zip}&car_type=used${YEAR}${data.year}${MAKE}${data.make}${MODEL}${data.model}${ROWS_25}${PHOTOS}`,
// 			{
// 				method: 'GET',
// 				headers: {
// 					Accept: 'application/json'
// 				}
// 			}
// 		)
//         .then((res) => res.json())
//         .then((payload) => dispatch({ type: "LAND_CARS_FOR_SALE", payload }));   
//     }
// };

export const fetchUsedCarsForSale = (query_obj) => {
    console.log(query_obj);
    return dispatch => {
        dispatch({ type: 'LOADING_USED_CARS' });
        return fetch(`${COORS}${MCSEARCH}${MCAPIKEY}${LONG}${query_obj.long}${LAT}${query_obj.lat}${RADIUS}${query_obj.miles}${USED}${ROWS_50}${YEAR}${query_obj.year}${MAKE}${query_obj.make}${MODEL}${query_obj.model}${TRIM}${query_obj.trim}${ROWS_50}${PHOTOS}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
			.then((res) => res.json())
			.then((payload) => dispatch({ type: 'LAND_USED_CARS_FOR_SALE', payload }));   
    }
};

export const fetchYearsForUsedCarsForSale = (location) => {
    console.log(location)
    console.log(location.activePage);
	console.log(location.activeStart);
    return dispatch => {
        dispatch({ type: 'LOADING_USED_CARS' });
        return fetch(`${COORS}${MCSEARCH}${MCAPIKEY}${LONG}${location.long}${LAT}${location.lat}${RADIUS}${location.miles}${USED}${STARTO}${ROWS_50}&facets=year|0|60`,
        {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
        .then((res) => res.json())
        .then((payload) => dispatch({ type: 'LAND_USED_YEARS', payload }));
    }
}

export const fetchMakesForUsedCarsForSale = (data) => {
    console.log(data)
    return dispatch => {
        dispatch({ type: 'LOADING_USED_CARS' });
        return fetch(`${COORS}${MCSEARCH}${MCAPIKEY}${LONG}${data.long}${LAT}${data.lat}${RADIUS}${data.miles}${USED}${STARTO}${ROWS_50}${YEAR}${data.year}&facets=make|0|60`,
        {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
        .then((res) => res.json())
        .then((payload) => dispatch({ type: 'LAND_USED_MAKES', payload }));
    }
}

export const fetchModelsForUsedCarsForSale = (data) => {
    console.log(data)
    return dispatch => {
        dispatch({ type: 'LOADING_USED_CARS' });
        return fetch(`${COORS}${MCSEARCH}${MCAPIKEY}${LONG}${data.long}${LAT}${data.lat}${RADIUS}${data.miles}${USED}${STARTO}${ROWS_50}${YEAR}${data.year}${MAKE}${data.make}&facets=model|0|60`,
        {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
        .then((res) => res.json())
        .then((payload) => dispatch({ type: 'LAND_USED_MODELS', payload }));
    }
}

export const fetchTrimsForUsedCarsForSale = (data) => {
    console.log(data)
    return dispatch => {
        dispatch({ type: 'LOADING_USED_CARS' });
        return fetch(`${COORS}${MCSEARCH}${MCAPIKEY}${LONG}${data.long}${LAT}${data.lat}${RADIUS}${data.miles}${USED}${STARTO}${ROWS_50}${YEAR}${data.year}${MAKE}${data.make}${MODEL}${data.model}&facets=trim|0|60`,
        {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
        .then((res) => res.json())
        .then((payload) => dispatch({ type: 'LAND_USED_TRIMS', payload }))
    }
}

// const mapStateToProps = (state) => {
//     return {
//         longitude: state.user.longitude,
//         latitude: state.user.latitude
//     }
// }

// export default connect(mapStateToProps, null)()

// export const getCarValueByVIN = (VINData) => {
// 	console.log(VINData);
// 	return fetch(`https://marketcheck-prod.apigee.net/v1/search?api_key=${MARKETCHECKAPIKEY}&vins=${VINData}`, {
// 		method: 'GET',
// 		headers: {
// 			Accept: 'application/json'
// 		}
// 	}).then((res) => res.json());
// };

// export const getCarValueByVIN = (VINData) => {
// 	console.log(VINData);
// 	return fetch(`https://marketcheck-prod.apigee.net/v1/search?api_key=${MARKETCHECKAPIKEY}&vins=${VINData}`, {
// 		method: 'GET',
// 		headers: {
// 			Accept: 'application/json'
// 		}
// 	}).then((res) => res.json());
// };

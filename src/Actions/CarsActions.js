// import { LOCALHOST } from '../Data/GlobalVars';
import { COORS } from '../Data/GlobalVars'
import { MCAPIKEY } from '../Data/GlobalVars';
// import { MCSALES } from '../Data/GlobalVars'
import { MCSEARCH } from '../Data/GlobalVars'
// import { USED } from '../Data/GlobalVars'
// import { NEW } from '../Data/GlobalVars'
import { YEAR } from '../Data/GlobalVars'
import { MAKE } from '../Data/GlobalVars'
import { MODEL } from '../Data/GlobalVars'
// import { TRIM } from '../Data/GlobalVars'
import { ZIP } from '../Data/GlobalVars'
import { RADIUS } from '../Data/GlobalVars'
import { ROWS_10 } from '../Data/GlobalVars'
// import { ROWS_25 } from '../Data/GlobalVars'
// import { ROWS_50 } from '../Data/GlobalVars'
import { PHOTOS } from '../Data/GlobalVars'

export const fetchCarsForSale = (data) => {
    console.log(data);
    return dispatch => {
        dispatch({ type: 'LOADING_CARS' });
        return fetch(
			`${COORS}${MCSEARCH}${MCAPIKEY}${RADIUS}${data.miles}${ZIP}${data.zip}&seller_type=dealer${YEAR}${data.year}${MAKE}${data.make}${MODEL}${data.model}${ROWS_10}${PHOTOS}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json'
				}
			}
		)
        .then((res) => res.json())
        .then((payload) => dispatch({ type: "LAND_CARS_FOR_SALE", payload }));   
    }
};

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

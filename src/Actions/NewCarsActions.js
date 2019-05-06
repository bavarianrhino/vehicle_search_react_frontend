// fetchUsedCarsForSale;
// fetcRadiusForNewCarsForSale;
// fetchYearsForNewCarsForSale;
// fetchMakesForNewCarsForSale;
// fetchModelsForNewCarsForSale;
// fetchTrimsForNewCarsForSale;

// import { LOCALHOST } from '../Data/GlobalVars';
import { COORS } from '../Data/GlobalVars'
import { MCAPIKEY } from '../Data/GlobalVars';
// import { MCSALES } from '../Data/GlobalVars'
import { MCSEARCH } from '../Data/GlobalVars'
// import { USED } from '../Data/GlobalVars'
import { NEW } from '../Data/GlobalVars'
import { LAT } from '../Data/GlobalVars'
import { LONG } from '../Data/GlobalVars'
import { YEAR } from '../Data/GlobalVars'
import { MAKE } from '../Data/GlobalVars'
import { MODEL } from '../Data/GlobalVars'
// import { TRIM } from '../Data/GlobalVars'
// import { ZIP } from '../Data/GlobalVars'
import { RADIUS } from '../Data/GlobalVars'
import { ROWS_10 } from '../Data/GlobalVars'
// import { ROWS_25 } from '../Data/GlobalVars'
// import { ROWS_50 } from '../Data/GlobalVars'
// import { PHOTOS } from '../Data/GlobalVars'


export const fetchYearsForNewCarsForSale = (location) => {
    console.log(location)
    return dispatch => {
        dispatch({ type: 'LOADING_NEW_CARS' });
        return fetch(`${COORS}${MCSEARCH}${MCAPIKEY}${LONG}${location.long}${LAT}${location.lat}${RADIUS}${location.miles}${NEW}${ROWS_10}&facets=year|0|60`,
        {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
        .then((res) => res.json())
        .then((payload) => dispatch({ type: 'LAND_NEW_YEARS', payload }));
    }
}

export const fetchMakesForNewCarsForSale = (data) => {
    console.log(data)
    return dispatch => {
        dispatch({ type: 'LOADING_NEW_CARS' });
        return fetch(`${COORS}${MCSEARCH}${MCAPIKEY}${LONG}${data.long}${LAT}${data.lat}${RADIUS}${data.miles}${NEW}${ROWS_10}${YEAR}${data.year}&facets=make|0|60`,
        {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
        .then((res) => res.json())
        .then((payload) => dispatch({ type: 'LAND_NEW_MAKES', payload }));
    }
}

export const fetchModelsForNewCarsForSale = (data) => {
    console.log(data)
    return dispatch => {
        dispatch({ type: 'LOADING_NEW_CARS' });
        return fetch(`${COORS}${MCSEARCH}${MCAPIKEY}${LONG}${data.long}${LAT}${data.lat}${RADIUS}${data.miles}${NEW}${ROWS_10}${YEAR}${data.year}${MAKE}${data.make}&facets=model|0|60`,
        {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
        .then((res) => res.json())
        .then((payload) => dispatch({ type: 'LAND_NEW_MODELS', payload }));
    }
}

export const fetchTrimsForNewCarsForSale = (data) => {
    console.log(data)
    return dispatch => {
        dispatch({ type: 'LOADING_NEW_CARS' });
        return fetch(`${COORS}${MCSEARCH}${MCAPIKEY}${LONG}${data.long}${LAT}${data.lat}${RADIUS}${data.miles}${NEW}${ROWS_10}${YEAR}${data.year}${MAKE}${data.make}${MODEL}${data.model}&facets=trim|0|60`,
        {
            method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
        .then((res) => res.json())
        .then((payload) => dispatch({ type: 'LAND_NEW_TRIMS', payload }))
    }
}
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
                                
                                // export const fetchUsedCarsForSale = (data) => {
                                //     console.log(data);
                                //     return dispatch => {
                                //         dispatch({ type: 'LOADING_CARS' });
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
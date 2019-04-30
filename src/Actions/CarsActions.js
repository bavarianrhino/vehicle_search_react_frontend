//=======LocalHost URL=======//
// const LOCALHOST = 'http://localhost:3000';


//=======API KEYS FROM .ENV=======//
const MARKETCHECKAPIKEY = `${process.env.REACT_APP_MARKETCHECK_API_KEY}`;
// console.log('API KEY', MARKETCHECKAPIKEY);


//=======Market Check EndPoints=======//
// const MARKETCHECK = 'https://marketcheck-prod.apigee.net/v1/sales?api_key='
// const VINPARAMS = '&car_type=used&vin='


export const fetchCarsForSale = (data) => {
    console.log(data);
    return dispatch => {
        dispatch({ type: 'LOADING_CARS' });
        return fetch(
			`https://marketcheck-prod.apigee.net/v1/search?api_key=${MARKETCHECKAPIKEY}&radius=${data.miles}&zip=${data.zip}&seller_type=dealer&year=${data.year}&make=${data.make}&model=${data.model}&rows=50&start=2&photo_links=true`,
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


// export const setCarValues = (data) => {
// 	return { type: 'SET_CAR_VALUES', data };
// };

// export const landCarsForSale = (data) => {
// 	return { type: 'LAND_CARS_FOR_SALE', data };
// };


// export const fetchCarsForSale = (data) => {
//     console.log(data);
//     return fetch(`https://marketcheck-prod.apigee.net/v1/search?api_key=${MARKETCHECKAPIKEY}&radius=${data.miles}&zip=${data.zip}&seller_type=dealer&year=${data.year}&make=${data.make}&model=${data.model}&rows=50&start=2&photo_links=true`,
//         {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json'
//             }
//     	}
//     ).then((res) => res.json())
// };

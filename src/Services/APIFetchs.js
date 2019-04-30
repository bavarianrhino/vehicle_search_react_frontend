// import $ from 'jquery';

//=======LocalHost URL=======//
const LOCALHOST = 'http://localhost:3000';

//=======API KEYS FROM .ENV=======//
const MARKETCHECKAPIKEY = `${process.env.REACT_APP_MARKETCHECK_API_KEY}`;
// console.log('API KEY', MARKETCHECKAPIKEY);

//=======Market Check EndPoints=======//
// const MARKETCHECK = 'https://marketcheck-prod.apigee.net/v1/sales?api_key='
// const VINPARAMS = '&car_type=used&vin='

export const getAuthToken = (loginData) => {
	console.log(loginData);
	return fetch(`${LOCALHOST}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(loginData)
	}).then((res) => res.json());
};

export const signUpNewUser = (loginData) => {
	console.log(loginData);
	return fetch(`${LOCALHOST}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(loginData)
	}).then((res) => res.json());
};

// export const getCarValueByVIN = (VINData) => {
//     console.log(VINData);
//     let settings = {
//         'url': 'https://marketcheck-prod.apigee.net/v1/history/1G4HP57228U166894?api_key={key}',
//         'method': 'GET',
//         'timeout': 0,
//         'headers': {
//             'Accept': 'application/json'
//         }
//     };

//     $.ajax(settings).done(function(response) {
//         console.log(response);
//     });
// };

// return fetch(`https://marketcheck-prod.apigee.net/v1/search?api_key=${MARKETCHECKAPIKEY}&vins=${VINData}&latitude=33.7872303&longitude=-84.3826917&radius=200&car_type=used&start=0&rows=10`
// https://marketcheck-prod.apigee.net/v1/history/1G4HP57228U166894?api_key=vppefiprYFtfGZV0M3vTxaIauROiVoVB

export const getCarValueByVIN = (VINData) => {
    console.log(VINData);
    return fetch(`https://marketcheck-prod.apigee.net/v1/search?api_key=${MARKETCHECKAPIKEY}&vins=${VINData}`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
    	}
    ).then((res) => res.json())
};


export const fetchCarsForSale = (data) => {
    console.log(data);
    return fetch(`https://marketcheck-prod.apigee.net/v1/search?api_key=${MARKETCHECKAPIKEY}&radius=${data.miles}&zip=${data.zip}&seller_type=dealer&year=${data.year}&make=${data.make}&model=${data.model}&rows=50&start=2&photo_links=true`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
    	}
    ).then((res) => res.json())
};

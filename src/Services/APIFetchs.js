import $ from 'jquery';

//=======LocalHost URL=======//
const LOCALHOST = 'http://localhost:3000';

//=======API KEYS FROM .ENV=======//
const MARKETCHECKAPIKEY = `${process.env.REACT_APP_MARKETCHECK_API_KEY}`;
console.log('API KEY', MARKETCHECKAPIKEY);

//=======Market Check EndPoints=======//
const MARKETCHECK = 'https://marketcheck-prod.apigee.net/v1/sales?api_key='
const VINPARAMS = '&car_type=used&vin='

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
//         'url': 'https://marketcheck-prod.apigee.net/v1/history/1G4HP57228U166894?api_key=vppefiprYFtfGZV0M3vTxaIauROiVoVB',
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

//http://api.marketcheck.com/v1/search?api_key={{api_key}}&vins=19XFB2F5XFE054327&latitude=34.05&longitude=-118.24&radius=100&car_type=used&start=0&rows=10
// return fetch(`https://marketcheck-prod.apigee.net/v1/search?api_key=${MARKETCHECKAPIKEY}&vins=${VINData}&latitude=33.7872303&longitude=-84.3826917&radius=200&car_type=used&start=0&rows=10`,
// return fetch('http://api.marketcheck.com/v1/vin/1G4HP57228U166894/specs?api_key=vppefiprYFtfGZV0M3vTxaIauROiVoVB',

export const getCarValueByVIN = (VINData) => {
    console.log(VINData);
    return fetch(`https://marketcheck-prod.apigee.net/v1/search?api_key=${MARKETCHECKAPIKEY}&vins=${VINData}`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
    	}
    ).then((res) => res.json()).then(console.log);
};


// return fetch(`${MARKETCHECK}${MARKETCHECKAPIKEY}${VINPARAMS}${VINData}`, {
    // Host: 'marketcheck-prod.apigee.net',
    // 'Content-Type': 'application/json'
    // 'Access-Control-Allow-Origin': '*','
// headers: {
//             'host': 'marketcheck-prod.apigee.net'
//         }
// return fetch('http://api.marketcheck.com/v1/search?api_key='+`${MARKETCHECKAPIKEY}`+'&vins='`${VINData}`+'&latitude=33.7872303&longitude=-84.3826917&radius=200&car_type=used&start=0&rows=10', {

// export const getCarValueByVIN = (VINData) => {
//     console.log(VINData);
//     let settings = {
// 		async: true,
// 		crossDomain: true,
// 		url: 'http://api.marketcheck.com/v1/vin/1G4HP57228U166894/specs?api_key=vppefiprYFtfGZV0M3vTxaIauROiVoVB',
// 		method: 'GET',
// 		headers: {
// 			host: 'marketcheck-prod.apigee.net',
// 			'Content-Type': 'application/json',
// 			'cache-control': 'no-cache',
// 			Origin: 'http://Ryans_MacBook_Pro:3001/vehicle_search_react_frontend',
// 			'Access-Control-Request-Origin': 'http://Ryans_MacBook_Pro:3001/vehicle_search_react_frontend'
// 		},
// 		processData: false,
// 		data: ''
// 	};

// 	$.ajax(settings).done(function(response) {
// 		console.log(response);
// 	});
// };

// https://marketcheck-prod.apigee.net/v1/history/1G4HP57228U166894?api_key=vppefiprYFtfGZV0M3vTxaIauROiVoVB

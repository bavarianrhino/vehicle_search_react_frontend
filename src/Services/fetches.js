
//=======LocalHost URL=======//
const LOCALHOST = 'http://localhost:3000';

//=======API KEYS FROM .ENV=======//
const MARKETCHECKAPIKEY = `${process.env.REACT_APP_MARKETCHECK_API_KEY}`
console.log('API KEY', MARKETCHECKAPIKEY)


export const getAuthToken = (loginData) => {
    console.log(loginData)
    return fetch(`${LOCALHOST}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(loginData)
	}).then((res) => res.json());
}


export const signUpNewUser = (loginData) => {
    console.log(loginData)
    return fetch(`${LOCALHOST}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(loginData)
	}).then((res) => res.json());
}
// export const signUpNewUser = async (loginData) => {
//     console.log(loginData)
//     const res = await fetch(`${LOCALHOST}/users`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginData)
//     });
//     return await res.json();
// }
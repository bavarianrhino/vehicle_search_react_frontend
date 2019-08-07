import { LOCALHOST } from '../Data/GlobalVars';


export const setCurrentUser = (data) => {
    // console.log(data)
    return (dispatch) => {
		dispatch({ type: 'SET_CURRENT_USER', data });
		return fetch(`${LOCALHOST}/profile`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
        .then((response) => response.json())
        .then((payload) => dispatch({ type: 'FETCH_FAVORITES', payload: payload.user.favorites }));
	};
};


export const getAuthToken = (loginData) => {
    // console.log(loginData);
	return fetch(`${LOCALHOST}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(loginData)
    })
    .then((res) => res.json())
}

export const signUpNewUser = (loginData) => {
	// console.log(loginData);
	return fetch(`${LOCALHOST}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(loginData)
	}).then((res) => res.json());
};

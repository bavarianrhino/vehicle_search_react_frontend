const API = 'http://localhost:3000';

export const getAuthToken = (loginData) => {
    console.log(loginData)
    return fetch(`${API}/login`, {
		method: 'POST',
		headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
		},
		body: JSON.stringify(loginData)
	}).then((res) => res.json())
}
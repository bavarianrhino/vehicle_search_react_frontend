const API = 'http://localhost:3000';

export const getAuthToken = (loginData) => {
    return fetch(`${API}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: loginData })
    }).then(res => res.json())
}
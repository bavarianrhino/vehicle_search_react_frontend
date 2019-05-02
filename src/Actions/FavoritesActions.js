
const LOCAL = 'http://localhost:3000'

export const fetchFavorites = () => {
	return (dispatch) => {
		dispatch({ type: 'LOADING_FAVORITES' });
		return fetch(`${LOCAL}/profile`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
			.then((response) => response.json())
			.then((payload) => dispatch({ type: 'FETCH_FAVORITES', payload: payload.user.favorites }));
	};
};

export const handleAddFavorite = (data) => {
    console.log(data);
    return dispatch => {
        dispatch({ type: 'SAVING_FAVORITE' });
        return fetch(`${LOCAL}/cars`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				make: data.make,
				model: data.model,
				year: data.id,
				api_id: data.id,
				url: data.vdp_url,
				vin: data.vin,
				user_id: data.user_id
			})
		})
			.then((res) => res.json())
			.then((payload) => {
				if (payload.error) {
					console.error(payload.error);
				} else {
					dispatch({ type: 'LAND_FAVORITE_CAR', payload });
				}
			});
    }
}
// 		});
//     return dispatch => {
//         dispatch({ type: 'LOADING_CARS' });
//         return fetch(
// 			`https://marketcheck-prod.apigee.net/v1/search?api_key=${MARKETCHECKAPIKEY}&radius=${data.miles}&zip=${data.zip}&seller_type=dealer&year=${data.year}&make=${data.make}&model=${data.model}&rows=50&start=2&photo_links=true`,
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
// export const handleNewFavorite = (favorite_params) => {
// 	return fetch(`${LOCAL}/movies`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			Authorization: localStorage.getItem('token')
// 		},
// 		body: JSON.stringify({
// 			title: favorite_params.title,
// 			search_id: favorite_params.search_id,
// 			poster: favorite_params.poster,
// 			genre: favorite_params.genre,
// 			user_id: favorite_params.user_id
// 		})
// 	}).then((res) => res.json());

// 	fetch(`${API}/cars`, {
// 		method: 'POST',
// 		headers: {
// 			Authorization: `Bearer ${localStorage.getItem('token')}`,
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify(carObj)
// 	})
// 		.then((res) => res.json())
// 		.then((payload) => {
// 			if (payload.error) {
// 				console.error(payload.error);
// 			} else {
// 				this.props.history.push('/');
// 			}
// 		});
// };
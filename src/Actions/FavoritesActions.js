import { LOCALHOST } from '../Data/GlobalVars';
import { COORS } from '../Data/GlobalVars'
import { MCAPIKEY } from '../Data/GlobalVars';
// import { MCSALES } from '../Data/GlobalVars'
import { MCLISTING } from '../Data/GlobalVars';
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

export const fetchFavorites = () => {
	return (dispatch) => {
		dispatch({ type: 'LOADING_FAVORITES' });
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

export const landFavorites = (urls) => {
    return (dispatch) => {
		dispatch({ type: 'LOADING_FAVORITES' });
        return Promise.all(
			urls.map(async (api) => {
				const response = await fetch(`${COORS}${MCLISTING}${api.api_id}?api_key=${MCAPIKEY}`, {
					method: 'GET',
					headers: {
						Accept: 'application/json'
					}
				})
					// .then((response) => response.json())
					// .then((payload) => dispatch({ type: 'LANDING_FAVORITES', payload }));
				const json = await response.json();
                console.log(json);
                dispatch({ type: 'LANDING_FAVORITES', json })
				// this.props.landFavorites(json);
			})
		)
			// .then((response) => response.json())
			// .then((payload) => dispatch({ type: 'LANDING_FAVORITES', payload }));
    }    
}


export const handleAddFavorite = (data) => {
    console.log(data);
    return dispatch => {
        dispatch({ type: 'SAVING_FAVORITE' });
        return fetch(`${LOCALHOST}/cars`, {
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
import { LOCALHOST } from '../Data/GlobalVars';
import { COORS } from '../Data/GlobalVars'
import { MCAPIKEY } from '../Data/GlobalVars';
// import { MCSALES } from '../Data/GlobalVars'
import { MCLISTING } from '../Data/GlobalVars';
// import { MCSEARCH } from '../Data/GlobalVars'
// import { USED } from '../Data/GlobalVars'
// import { NEW } from '../Data/GlobalVars'
// import { YEAR } from '../Data/GlobalVars'
// import { MAKE } from '../Data/GlobalVars'
// import { MODEL } from '../Data/GlobalVars'
// import { TRIM } from '../Data/GlobalVars'
// import { ZIP } from '../Data/GlobalVars'
// import { RADIUS } from '../Data/GlobalVars'
// import { START } from '../Data/GlobalVars'
// import { ROWS_10 } from '../Data/GlobalVars'
// import { ROWS_25 } from '../Data/GlobalVars'
// import { ROWS_50 } from '../Data/GlobalVars'
// import { PHOTOS } from '../Data/GlobalVars'



// *********************************************************************** //
// Initial fetch is located in getCurrentUser located in LoginSignUpAction //
// *********************************************************************** //

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
				});
                const json = await response.json();
                if(json.fault) {
                    let errorObj = {
						error: json.fault.detail.errorcode,
						api: api.id
					};
                    dispatch({ type: 'ABORT_FAVORITE', errorObj });
                    console.error(json.fault.detail.errorcode, api.id, " - API Call was not successful")
                    // console.error(json.fault.faultstring, ' - More Info on API call');
                }else{
                    dispatch({ type: 'LANDING_FAVORITES', json });
                    console.error(json, ' - This API Call was GOOD!');
                }
			})
		)
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
				year: data.year,
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

export const handleRemoveFavorite = (car_user_obj) => {
    return dispatch => {
        dispatch({ type: 'DELETING_FAVORITE' })
        return fetch(`${LOCALHOST}/favorites`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user_id: car_user_obj.user_id,
				car_id: car_user_obj.car_id
			})
		})
			.then((payload) => console.log(payload, 'Does deleting respond with anything?'))
			// .then((payload) => console.log(payload, user_id, car_id, vin))
			.then((payload) => dispatch({ type: 'PICK_OUT_DELETED_FAVORITE', car_user_obj }));
        // .then((payload) => dispatch({ type: 'FETCH_FAVORITES', payload: payload.user.favorites }));
    }
}

export const showDetails = (data) => {
    console.log(data)
    return dispatch => {
        dispatch({ type: 'SHOWING_FAVORITES_DETAILS' })
        return fetch(`${COORS}${MCLISTING}${data.api_id}?api_key=${MCAPIKEY}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				data: data
			})
		})
        .then((res) => res.json())
        .then((payload) => {
            if (payload.error) {
                console.error(payload.error);
            } else {
                dispatch({ type: 'LAND_FAVORITE_CAR_DEAILS', payload });
            }
        });
    }
}

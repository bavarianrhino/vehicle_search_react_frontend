
export const FavoritesReducer = (

	state = {
        loading: false,
        api_urls: [],
		favorites: []
	}, action) => {

        switch (action.type) {
			case 'SAVING_FAVORITE':
				return { ...state, loading: true };

			case 'LOADING_FAVORITES':
				return { ...state, loading: true };

			case 'DONE_LOADING_FAVORITES':
				return { ...state, loading: false };

			case 'FETCH_FAVORITES':
				return { ...state, api_urls: action.payload, loading: false };

			case 'LANDING_FAVORITES':
				// console.log(state.api_urls.map(({ vin }) => vin));
				// console.log(state.api_urls.map(({ vin }) => vin).includes(action.json.vin));
				if (state.api_urls.map(({ vin }) => vin).includes(action.json.vin) && state.favorites.length >= state.api_urls.length) {
					return state;
				} else {
                    let car_id_obj = state.api_urls.find(({ vin }) => action.json.vin === vin)
                    console.log(car_id_obj)
                    let object2 = (({ ...action.json, car_id: car_id_obj.id }));
                    console.log(object2);
					return { ...state, favorites: [...state.favorites, object2], loading: false };
				}

			case 'LAND_FAVORITE_CAR':
				return { ...state, favorites: [...state.favorites, action.payload], loading: false };

			case 'DELETING_FAVORITE':
				return { ...state, loading: true };

			case 'REMOVE_FAVORITE_CAR':
				return { ...state, loading: true };

			default:
				return state;
		}
};
// dispatch({ type: 'DELETING_FAVORITE' });
// dispatch({ type: 'REMOVE_FAVORITE_CAR', payload });
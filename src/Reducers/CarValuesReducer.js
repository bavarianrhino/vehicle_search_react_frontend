
export const CarValueReducer = (
	state = {
        loading: false,
        count_found: 0,
		listings: [],
		stats: []
	}, action ) => {

	switch (action.type) {

		case 'SAVING_VALUES':
			return { ...state, loading: true };

		case 'LOADING_VALUES':
			return { ...state, loading: true };

		case 'FETCH_VALUES':
			return { ...state, loading: false };

		case 'LANDING_VALUES':
			// console.log(state.api_urls.map(({ vin }) => vin));
			// console.log(state.api_urls.map(({ vin }) => vin).includes(action.json.vin));
			// if (state.api_urls.map(({ vin }) => vin).includes(action.json.vin) && state.favorites.length >= state.api_urls.length) {
			// 	return state;
			// } else {
				return { ...state, favorites: [...state.favorites, action.json], loading: false };

		// case 'LAND_FAVORITE_CAR':
		// 	return { ...state, favorites: [...state.favorites, action.payload], loading: false };

		default:
			return state;
	}
};


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
				return { ...state, loading: !state.loading };

			case 'FETCH_FAVORITES':
				return { ...state, api_urls: action.payload, loading: !state.loading };

			case 'LANDING_FAVORITES':
				return { ...state, favorites: [...state.favorites, action.json], loading: !state.loading };

			case 'LAND_FAVORITE_CAR':
				return { ...state, loading: false, favorites: [...state.favorites, action.payload] };

			default:
				return state;
		}
};
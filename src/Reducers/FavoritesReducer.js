
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

			case 'FETCH_FAVORITES':
				return { ...state, api_urls: action.payload, loading: false };

            case 'LANDING_FAVORITES':
                console.log((state.api_urls.map(({vin}) => vin)))
                console.log(state.api_urls.map(({ vin }) => vin).includes(action.json.vin));
                if ((state.api_urls.map(({vin}) => vin).includes(action.json.vin)) && (state.favorites.length >= state.api_urls.length)) {
                    return state;
                } else {
                    return { ...state, favorites: [...state.favorites, action.json], loading: false };
                }

			case 'LAND_FAVORITE_CAR':
				return { ...state, favorites: [...state.favorites, action.payload], loading: false };

			default:
				return state;
		}
};
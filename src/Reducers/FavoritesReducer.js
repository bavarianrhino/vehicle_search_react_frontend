
export const FavoritesReducer = (

	state = {
        loading: false,
		favorites: []
	}, action) => {

        switch (action.type) {
			case 'SAVING_FAVORITE':
                return { ...state, loading: true };
                
			case 'LOADING_FAVORITES':
                return { ...state, loading: true };
                
			case 'FETCH_FAVORITES':
				return { ...state, loading: false, favorites: action.payload };

			case 'LAND_FAVORITE_CAR':
				return { ...state, loading: false, favorites: [...state.favorites, action.payload] };

			default:
				return state;
		}
};
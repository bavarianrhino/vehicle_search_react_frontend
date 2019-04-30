
export const FavoritesReducer = (
    
	state = {
        loading: false,
		favorites: []
	}, action) => {

        switch (action.type) {

			case 'LOADING_FAVORITES':
				return { ...state, loading: true };

			case 'FETCH_FAVORITES':
				return { loading: false, favorites: action.payload };

			default:
				return state;
		}
};

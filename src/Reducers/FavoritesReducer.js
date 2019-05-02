
export const FavoritesReducer = (

	state = {
        loading: false,
		favorites: []
	}, action) => {

        switch (action.type) {
			case 'SAVING_FAVORITE':
				return { ...state, loading: true };

			case 'LAND_FAVORITE_CAR':
				return { ...state, loading: false, favorites: action.payload };

			default:
				return state;
		}
};
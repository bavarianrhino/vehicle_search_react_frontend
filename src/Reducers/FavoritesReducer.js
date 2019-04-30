
export const FavoritesReducer = (
	state = {
		favorites: []
	}, action) => {

        switch (action.type) {
            
            // case 'SET_CURRENT_USER':
            //     return { ...state, currentUser: action.data };

            default:
                return state;
	}
};

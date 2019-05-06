export const UserReducer = (

	state = {
        loading: false,
        longitude: null,
        latitude: null
        
	}, action) => {

        switch (action.type) {
			case 'SAVING_LOCATION':
				return { ...state, loading: true };

			case 'SET_LOCATION':
				return { ...state, longitude: action.location.long, latitude: action.location.lat };

			default:
				return state;
		}
};
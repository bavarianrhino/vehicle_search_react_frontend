export const UserReducer = (

	state = {
        loading: true,
        currentUser: null,
        activeTab: 0,
        longitude: null,
        latitude: null
        
	}, action) => {

        switch (action.type) {
			case 'SAVING_LOCATION':
				return { ...state, loading: true };

			case 'SET_LOCATION':
				return { ...state, longitude: action.location.long, latitude: action.location.lat, loading: false };

			case 'SET_CURRENT_USER':
                return { ...state, currentUser: action.data };
                
            case 'SET_ACTIVE_TAB':
                return { ...state, activeTab: action.data };

			default:
				return state;
		}
};
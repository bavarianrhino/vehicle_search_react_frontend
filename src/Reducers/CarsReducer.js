
export const CarsReducer = (

	state = {
        loading: false,
		currentUser: null,
        carsForSale: [],
        favorites: [],
        carValueInfo: []
    }, 
    action
) => {

    switch (action.type) {
		case 'SET_CURRENT_USER':
			return { ...state, currentUser: action.data };

		case 'LOADING_CARS':
			return { ...state, loading: true };

		case 'DONE_LOADING_CARS':
			return { ...state, loading: false };

		case 'LAND_CARS_FOR_SALE':
			return { ...state, loading: false, carsForSale: action.payload };

		default:
			return state;
	}
};

// case 'SET_CAR_VALUES':
//     return { ...state, carValueInfo: action.data }

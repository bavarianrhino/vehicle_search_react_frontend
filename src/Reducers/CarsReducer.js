
export const CarsReducer = (

	state = {
        loading: false,
		currentUser: null,
        carsForSale: [],
        favorites: [],
        fetch_count: 0,
        listings: [],
        facet_years: [],
        facet_makes: [],
        facet_models: [],
        facet_trims: []
    }, 
    action
) => {

    switch (action.type) {
		case 'SET_CURRENT_USER':
			return { ...state, currentUser: action.data };

		case 'LOADING_CARS':
			return { ...state, loading: true };

		case 'DONE_LOADING_CARS':
            return { ...state, 
                fetch_count: action.payload.num_found,
                listings: action.payload.listings,
                facet_years: action.payload.facets.year,
                facet_makes: action.payload.facets.make,
                loading: false };
                // facet_models: action.payload.facets.facet_models,
                // facet_trims: action.payload.facets.facet_trims,

		case 'LAND_CARS_FOR_SALE':
			return { ...state, loading: false, carsForSale: action.payload };

		default:
			return state;
	}
};

// case 'SET_CAR_VALUES':
//     return { ...state, carValueInfo: action.data }

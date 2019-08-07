
export const UsedCarsReducer = (

	state = {
        loading: false,
		currentUser: null,
        fetch_count: 0,
        listings: [],
        favorites: [],
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

		case 'LOADING_USED_CARS':
			return { ...state, loading: true };

        case 'LAND_USED_YEARS':
            let years = action.payload.facets.year.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase().replace(/ /g, '%20'), count: obj.count, key: i }))
            return {
				...state,
				fetch_count: action.payload.num_found,
                listings: action.payload.listings,
                facet_years: years,
                facet_makes: [],
                facet_models: [],
                facet_trims: [],
				loading: false
            };
            
        case 'LAND_USED_MAKES':
            let makes = action.payload.facets.make.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase().replace(/ /g, '%20'), count: obj.count, key: i }))
            return {
				...state,
				fetch_count: action.payload.num_found,
				listings: action.payload.listings,
                facet_makes: makes,
                facet_models: [],
                facet_trims: [],
				loading: false
			};
            
        case 'LAND_USED_MODELS':
            let models = action.payload.facets.model.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase().replace(/ /g, '%20'), count: obj.count, key: i }))
            return {
				...state,
				fetch_count: action.payload.num_found,
				listings: action.payload.listings,
				facet_models: models,
				facet_trims: [],
				loading: false
			};
            
        case 'LAND_USED_TRIMS':
            let trims = action.payload.facets.trim.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase().replace(/ /g, '%20'), count: obj.count, key: i }))
            return {
				...state,
				fetch_count: action.payload.num_found,
				listings: action.payload.listings,
                facet_trims: trims,
				loading: false
			};
            
            
        case 'LAND_CARS_FOR_SALE':
			return { ...state, loading: false, carsForSale: action.payload };
            
        default:
            return state;
    }
};

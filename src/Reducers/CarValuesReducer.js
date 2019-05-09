
export const CarValuesReducer = (
	state = {
        begin_plot: false,        
        loading: false,
        num_found: 0,
        listings: [],
        stats: [],
		facet_years: [],
        facet_makes: [],
        facet_models: [],
        facet_trims: []
	}, action ) => {

	switch (action.type) {
		case 'SAVING_VALUES':
			return { ...state, loading: true };

		case 'LOADING_VALUES':
			return { ...state, loading: true };

		case 'FETCH_VALUES':
			return { ...state, loading: false };

		case 'LANDING_VALUES':
			return {
				...state,
                num_found: action.json.num_found,
                listings: [...state.listings, action.json.listings],
                stats: action.json.stats,
                loading: false,
                begin_plot: true
			};

		case 'LAND_NEW_YEARS':
			let years = action.payload.facets.year.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase().replace(/ /g, '%20'), count: obj.count, key: i }));
			return {
				...state,
				facet_years: years,
				facet_makes: [],
				facet_models: [],
				loading: false
			};

		case 'LAND_NEW_MAKES':
			let makes = action.payload.facets.make.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase().replace(/ /g, '%20'), count: obj.count, key: i }));
			return {
				...state,
				facet_makes: makes,
				facet_models: [],
				loading: false
			};

		case 'LAND_NEW_MODELS':
			let models = action.payload.facets.model.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase().replace(/ /g, '%20'), count: obj.count, key: i }));
			return {
				...state,
				fetch_count: action.payload.num_found,
				facet_models: models,
				loading: false
			};
		default:
			return state;
	}
};

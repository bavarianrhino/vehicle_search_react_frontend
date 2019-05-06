
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

        case 'LAND_YEARS':
            let years = action.payload.facets.year.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase().replace(/ /g, '%20'), count: obj.count, key: i }))
            return {
				...state,
				fetch_count: action.payload.num_found,
                listings: action.payload.listings,
                facet_years: years,
				carsForSale: action.payload.listings,
				loading: false
			};
            // facet_years: ...state.facet_years, action.payload.facets.year.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase().replace(/ /g, '%20'), count: obj.count, key: i })),
            // facet_makes: [...state.facet_makes, action.payload.facets.make.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase().replace(/ /g, '%20'), count: obj.count, key: i }))],
            // facet_years: [...state.facet_years, action.payload.facets.year.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase.replace(/ /g, '%20'), count: obj.count, key: i }))],
				// facet_makes: [...state.facet_makes, action.payload.facets.make.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase.replace(/ /g, '%20'), count: obj.count, key: i }))],
                // facet_models: action.payload.facets.facet_models,
                // facet_trims: action.payload.facets.facet_trims,
                // return { ...state, favorites: [...state.favorites, action.json], loading: false };
                // const arr = [{id:1,name:'foo'},{id:2,name:'bar'}];
// const mapped = arr.map(element => Object.assign(element, {isApproved: true})
// More new approach would be using spread operator:

// const arr = [{id:1,name:'foo'},{id:2,name:'bar'}];
// const mapped = arr.map(element => ({isApproved: true ,...element}))

		case 'LAND_CARS_FOR_SALE':
			return { ...state, loading: false, carsForSale: action.payload };

		default:
			return state;
	}
};

// case 'SET_CAR_VALUES':
//     return { ...state, carValueInfo: action.data }

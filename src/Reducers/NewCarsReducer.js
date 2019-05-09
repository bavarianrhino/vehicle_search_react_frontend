export const NewCarsReducer = (
	state = {
        loading: false,
		currentUser: null,
        fetch_count: 0,
        page_count: 1,
        active_start: 0,
        page_total: 1,
        remainder_count : 0,
        render_option: 10,
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

		case 'LOADING_NEW_CARS':
			return { ...state, loading: true, show_results: true };

		case 'RENDER_OPTION':
			return { ...state, render_option: action.val };

		case 'DONE_LOADING_NEW_CARS':
			return { ...state, loading: false };

		case 'LAND_NEW_YEARS':
			let years = action.payload.facets.year.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase().replace(/ /g, '%20'), count: obj.count, key: i }));
			return {
				...state,
				fetch_count: action.payload.num_found,
				page_count: action.payload.activePage,
				active_start: action.payload.activeStart,
				page_total: Math.floor(action.payload.num_found / 50),
				remainder_count: action.payload.num_found % 50,
				render_option: 10,
				listings: action.payload.listings,
				facet_years: years,
				facet_makes: [],
				facet_models: [],
				facet_trims: [],
				loading: false
			};

		case 'LAND_NEW_MAKES':
			let makes = action.payload.facets.make.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase().replace(/ /g, '%20'), count: obj.count, key: i }));
			return {
				...state,
				fetch_count: action.payload.num_found,
				page_count: 1,
				page_total: Math.floor(action.payload.num_found / 50),
				remainder_count: action.payload.num_found % 50,
				render_option: 10,
				listings: action.payload.listings,
				facet_makes: makes,
				facet_models: [],
				facet_trims: [],
				loading: false
			};

		case 'LAND_NEW_MODELS':
			let models = action.payload.facets.model.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase().replace(/ /g, '%20'), count: obj.count, key: i }));
			return {
				...state,
				fetch_count: action.payload.num_found,
				page_count: 1,
				page_total: Math.floor(action.payload.num_found / 50),
				remainder_count: action.payload.num_found % 50,
				render_option: 10,
				listings: action.payload.listings,
				facet_models: models,
				facet_trims: [],
				loading: false
			};

		case 'LAND_NEW_TRIMS':
			let trims = action.payload.facets.trim.map((obj, i) => ({ text: obj.item, value: obj.item.toLowerCase().replace(/ /g, '%20'), count: obj.count, key: i }));
			return {
				...state,
				fetch_count: action.payload.num_found,
				page_count: 1,
				page_total: Math.floor(action.payload.num_found / 50),
				remainder_count: action.payload.num_found % 50,
				render_option: 10,
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

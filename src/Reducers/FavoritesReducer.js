
export const FavoritesReducer = (

	state = {
        loading: false,
        api_urls: [],
        favorites: [],
        errors: [],
        missed: []
	}, action) => {

        switch (action.type) {
			case 'SAVING_FAVORITE':
				return { ...state, loading: true };

			case 'LOADING_FAVORITES':
				return { ...state, loading: true };

			case 'DONE_LOADING_FAVORITES':
				return { ...state, loading: false };

			case 'FETCH_FAVORITES':
				return { ...state, api_urls: action.payload, loading: false };

			case 'LANDING_FAVORITES':
				// console.log(state.api_urls.map(({ vin }) => vin));
				// console.log(state.api_urls.map(({ vin }) => vin).includes(action.json.vin));
				// if (state.api_urls.map(({ vin }) => vin).includes(action.json.vin) && state.favorites.length >= state.api_urls.length) {
                // if (state.api_urls.map(({ vin }) => vin).includes(action.json.vin) && (state.api_urls.length >= state.favorites.length)) {
                    // console.log(state.api_urls.map(({ vin }) => vin));
					// return {...state, loading: false}
				// } else {
					let car_id_obj = state.api_urls.find(({ vin }) => action.json.vin === vin);
					// console.log(car_id_obj);
					let object2 = { ...action.json, car_id: car_id_obj.id };
					// console.log(object2);
					return { ...state, favorites: [...state.favorites, object2], loading: false };
					// return { ...state, api_urls: [...state.api_urls, object2], loading: false };
				// }

			case 'LAND_FAVORITE_CAR':
				// return { ...state, favorites: [...state.favorites, action.payload], loading: false };
				return { ...state, api_urls: [...state.api_urls, action.payload], loading: false };

			case 'PICK_OUT_DELETED_FAVORITE':
				// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
				// var filtered = array.filter(function(value, index, arr) {
					// return value > 5;
                // });
                // myArray = myArray.filter(function( obj ) {
                    // return obj.field !== 'money';
                // });
                let updatedAPI_urls = state.api_urls.filter(function(obj) {
                    return obj.vin !== action.car_user_obj.vin
                })
                // console.log(updatedAPI_urls)
                let updatedFavs = state.favorites.filter(function(obj) {
                    return obj.vin !== action.car_user_obj.vin
                })
                // console.log(updatedFavs)
                return { ...state, api_urls: updatedAPI_urls, favorites: updatedFavs, loading: false }
                // let updatedFavs = state.favorites.map(({vin}) => vin).filter(vin !== action.vin) {
                // let updatedFavs = state.favorites.find(({vin}) =>  vin).filter(vin !== action.vin) {= state.api_urls.find(({ vin }) => action.json.vin === vin);

                // })
            // return { ...state, }

			//filtered => [6, 7, 8, 9]
			//array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

			case 'DELETING_FAVORITE':
				return { ...state, loading: true };

			case 'DONE_DELETING_FAVORITE':
				// CHANGE TO DELETE ONLY THE REMOVED CAR SO FETCHING ALL NEW ONES IS UNECCESSARY
				return { ...state, loading: false };

			case 'REMOVE_FAVORITE_CAR':
				return { ...state, loading: true };

			case 'ABORT_FAVORITE':
                return { ...state, errors: [...state.errors, action.errorObj], missed: [...state.missed, action.errorObj.api], loading: false };

			default:
				return state;
		}
};
// dispatch({ type: 'DELETING_FAVORITE' });
// dispatch({ type: 'REMOVE_FAVORITE_CAR', payload });
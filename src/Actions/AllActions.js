// import { getCarValueByVIN } from '../Services/APIFetchs';


export const setCurrentUser = (data) => {
    return {
        type: 'SET_CURRENT_USER',
        data
    };
};

export const signUpNewUser = (data) => {
    return {
        type: 'SIGN_UP_NEW_USER',
        data
	};
}

export const setCarValues = (data) => {
    return {
        type: 'SET_CAR_VALUES',
        data
	};
}

export const landCarsForSale = (data) => {
    return {
        type: 'LAND_CARS_FOR_SALE',
        data
	};
}


// export const fetchCarValues = (dispatch) =>{
//     return getCarValueByVIN('url')
// 		.then((resp) => resp.json())
// 		.then((data) => dispatch({ type: 'SET_CAR_VALUES', data: data }));
// }
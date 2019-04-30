
// Redux Store
// import cuid from 'cuid';
// export const cuidFn = cuid;

export default function AllReducers (
    state = {
        currentUser: null,
        carsForSale: [],
        carSaleInfo: [],
        favorites: [],
        carValueInfo: []
    }, action) {

        switch (action.type) {

            case 'SET_CURRENT_USER':
                return {
                    ...state,
                    currentUser: action.data
                }

            case 'SET_CAR_VALUES':
                return {
                    ...state,
                    carValueInfo: action.data
                }

            case 'LAND_CARS_FOR_SALE':
                return {
                    ...state,
                    carsForSale: action.data
                }

            default:
                return state
                
        }
}

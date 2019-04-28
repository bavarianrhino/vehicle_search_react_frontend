
// Redux Store

let initialState = {
    carsForSale: [],
    carSaleInfo: [],
    favorites: [],
    carValueInfo: []
}

export default (state=initialState, action) => {

    switch (action.type) {

        case 'SEARCH_CARS_FOR_SALE':
            return {
                ...state,
                carsForSale: action.data
            }

        default:
            return {
                initialState
            }
    }
}
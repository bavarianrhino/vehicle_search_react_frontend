
// Redux Store

let initialState = {
    currentUser: null,
    carsForSale: [],
    carSaleInfo: [],
    favorites: [],
    carValueInfo: []
}

export default (state=initialState, action) => {

    switch (action.type) {

        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.data
            }

        default:
            return {
                initialState
            }
    }
}
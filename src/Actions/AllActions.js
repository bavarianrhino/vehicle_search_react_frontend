
export const setCurrentUser = (data) => {
    return {
        type: 'SET_CURRENT_USER',
        data
    };
};

export const searchCarValue = (data) => {
    return {
        type: 'SEARCH_CAR_VALUE',
        data
	};
}
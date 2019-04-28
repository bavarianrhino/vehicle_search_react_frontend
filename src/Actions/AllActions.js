
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
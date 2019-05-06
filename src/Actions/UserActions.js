

export const setPosition = (location) => {
    return { 
        type: 'SET_LOCATION', location
    }
}

export const setActiveRenderResults = (data) => {
    return { 
        type: 'SET_ACTIVE_TAB', data
    }
}
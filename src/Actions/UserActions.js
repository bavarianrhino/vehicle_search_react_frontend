

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

export const stopLoading = () => {
    return { 
        type: 'DONE_LOADING_FAVORITES'
    }
}

export const upDateSliderListings = (val) => {
    return { 
        type: 'RENDER_LISTINGS', val
    }
}
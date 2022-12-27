const reducer = (state, action) => {
    if (action.type === 'UPDATE_HOME'){
        return {
            ...state,
            top: action.payload.top,
            bottom: action.payload.bottom,
            image: action.payload.image
        }
    }
    if (action.type === 'UPDATE_ABOUT'){
        return {
            ...state,
            top: action.payload.top,
            bottom: action.payload.bottom,
            image: action.payload.image
        }
    }
    return state
}

export default reducer

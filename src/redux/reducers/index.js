import { combineReducers } from "redux";

// import reducers
const initialState = {
    loggedIn: false,
    loading: false,
    errorText: null
}

const auth = function(state= initialState, action) {
    switch (action.type) {
        case 'SIGN_IN_REQUEST': {
            return {...state, loading: true}
        }
        case 'SIGN_IN_SUCCESS': {
            return { ...state, loading: false, loggedIn: true }
        }
        case 'SIGN_IN_FAIL': {
            return {...state, loading: false, errorText: action.payload}
        }
        default:
            return state
    }
}

export default combineReducers({ auth })

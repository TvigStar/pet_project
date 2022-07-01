import {SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS} from "../actions/actionType";

const initialState = {
    loggedIn: false,
    loading: false,
    errorText: null
}

export const auth = function(state= initialState, action) {
    switch (action.type) {
        case SIGN_IN_REQUEST: {
            return {...state, loading: true}
        }
        case SIGN_IN_SUCCESS: {
            return { ...state, loading: false, loggedIn: true }
        }
        case SIGN_IN_FAIL: {
            return {...state, loading: false, errorText: action.payload}
        }
        default:
            return state
    }
}
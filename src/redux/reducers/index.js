import { combineReducers } from "redux";

// import reducers

const authReducer = function(state = {}, action) {
    switch (action.type) {
        case 'SIGN_IN': {
            console.log('reducer')
            return {}
        }
    }

    return {}
}

export default combineReducers({authReducer})

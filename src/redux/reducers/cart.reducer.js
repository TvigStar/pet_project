import {
    CART_DELETE,
    CART_REQUEST,
    CART_REQUEST_ERROR,
    CART_REQUEST_SUCCESS
} from "../actions/actionType";

const initialState = {
    cartLoading: false,
    cartFetched: false,
    cart: null
}


export const cart = function (state = initialState, action) {
    switch (action.type) {
        case CART_REQUEST : {
            return {...state, cartLoading: true}
        }
        case CART_REQUEST_SUCCESS: {
            return {...state, cartLoading: false, cartFetched: true, cart: action.payload}
        }
        case CART_REQUEST_ERROR: {
            return {...state, cartLoading: false, cartFetched: true, cart: null}
        }
        case CART_DELETE: {
            return {...state, cart: null}
        }
        default:
            return state
    }

}
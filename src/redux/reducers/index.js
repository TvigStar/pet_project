import {combineReducers} from "redux";

// import reducers
import {auth} from './auth.reducer'
import {cart} from "./cart.reducer";


export default combineReducers({auth, cart} )

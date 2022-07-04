import { all, call } from 'redux-saga/effects'

import {authSagas} from "./auth.saga";
import {cartSagas} from "./cart.saga";

function* helloSaga() {
    console.log('hello saga')
}

export default function* rootSaga() {
    yield all([call(helloSaga), call(authSagas), call(cartSagas)])
}



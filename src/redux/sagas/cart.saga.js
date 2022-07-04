import { call, all, takeLatest, put } from 'redux-saga/effects'
import { Api } from "../../api";
import {CART_REQUEST, CART_REQUEST_ERROR, CART_REQUEST_SUCCESS } from "../actions/actionType";

function* getCart(action){
    try{
       const { data } = yield call(Api.cart.getCart)

        yield put({ type: CART_REQUEST_SUCCESS, payload: data})

    } catch (err){
        yield put({ type: CART_REQUEST_ERROR, payload: err.response.data.message});
    }
}

function* cartSaga() {
    yield takeLatest(CART_REQUEST, getCart)
}

export function* cartSagas() {
    yield all([call(cartSaga)])
}
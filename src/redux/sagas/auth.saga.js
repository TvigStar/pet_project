import { call, all, takeLatest, put } from 'redux-saga/effects'
import { Api } from "../../api";
import {SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS} from "../actions/actionType";

function* signin(action) {
    try {
        const { email, password } = action.payload;

        const { data } = yield call(Api.auth.signIn, { email, password })

        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('refresh_token', data.refresh_token)

        yield put({
            type: SIGN_IN_SUCCESS
        });
    } catch (error) {
        console.log(error);
        yield put({ type: SIGN_IN_FAIL, payload: error.response.data.message});
    }
}

function* signinSaga() {
    yield takeLatest(SIGN_IN_REQUEST, signin)
}

export function* authSagas() {
    yield all([call(signinSaga)])
}
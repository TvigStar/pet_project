import { call, all, takeLatest } from 'redux-saga/effects'
import { Api } from "../../api";

function* signin(action) {
    const { email, password } = action.payload;
    console.log(email, password, 11)

    const {data} = yield call(Api.auth.signIn, { email, password })
    console.log(data);
    // localStorage.setItem('access_token', data.accessToken)
    // localStorage.setItem('refresh_token', data.refreshToken)

}

function* signinSaga() {
    yield takeLatest('SIGN_IN', signin)
}

export function* authSagas() {
    yield all([call(signinSaga)])
}
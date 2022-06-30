import { call, all, takeLatest, put } from 'redux-saga/effects'
import { Api } from "../../api";

function* signin(action) {
    try {
        const { email, password } = action.payload;

        const { data } = yield call(Api.auth.signIn, { email, password })

        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('refresh_token', data.refresh_token)

        yield put({
            type: "SIGN_IN_SUCCESS"
        });
    } catch (error) {
        console.log(error);
        yield put({ type: "SIGN_IN_FAIL", payload: error.response.data.message});
    }
}

function* signinSaga() {
    yield takeLatest('SIGN_IN_REQUEST', signin)
}

export function* authSagas() {
    yield all([call(signinSaga)])
}

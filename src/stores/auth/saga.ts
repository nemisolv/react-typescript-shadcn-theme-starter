import { takeLatest } from 'redux-saga/effects';
import { handleLogin, handleRegister } from './handle';
import { login, loginSuccess } from '@stores/slices/authSlice';

function* authSaga() {
  yield takeLatest(login.type, handleLogin);
  yield takeLatest(register.type,handleRegister)
}

export default authSaga;

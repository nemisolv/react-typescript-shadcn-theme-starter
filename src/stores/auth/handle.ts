import AuthService from '@services/auth.service';
import { SagaIterator } from 'redux-saga';
import { LoginParams, RegisterParams } from '@services/shared.type';
import { loginFailure, loginSuccess } from '@stores/slices/authSlice';
import { saveTokens } from '@utils/cookieUtils';
import { call, put } from 'redux-saga/effects';
import { VerifyEmailParams } from 'services/shared.type';
function* handleLogin({ payload }: { payload: LoginParams }): SagaIterator {
  try {
    const response = yield call(AuthService.login, payload);
    const { accessToken, refreshToken, data } = response.data;
    if (accessToken && refreshToken) {
      saveTokens(accessToken, refreshToken);
      yield put(loginSuccess(data));
    } else {
      yield put(loginFailure('Missing tokens'));
    }
  } catch (error) {
    console.log('Error when loging in system');
    yield put(loginFailure('Login failed!'));
    throw error;
  }
}

function* handleRegister({
  payload,
}: {
  payload: RegisterParams;
}): SagaIterator {
  try {
    yield call(AuthService.register, payload);
  } catch (error) {
    console.log('Error when registering in system');
  }
}

function* handleVerifyEmail({payload}: {payload: VerifyEmailParams}): SagaIterator {
  try {
    yield call(AuthService.verifyEmail, payload);
  } catch (error) {
    console.log('Error when verifying email');
  }
}

export { handleLogin, handleRegister , handleVerifyEmail};

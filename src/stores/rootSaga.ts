import { all, fork } from 'redux-saga/effects';
import authSaga from './auth/saga';
// import postSaga from './posts/saga';
// import commentSaga from '@stores/comment/saga.js';

function* rootSaga() {
  yield all([
    fork(authSaga),
    // fork(postSaga),
    // fork(commentSaga)
    // fork(userSaga),
    // fork(commentSaga),
    // fork(likeSaga),
    // fork(followSaga),
    // fork(searchSaga),
    // fork(notiSaga),
  ]);
}

export default rootSaga;
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchSpaces() {
  try {
    const response = yield axios.get('/api/spaces');
    yield put({ type: 'SET_SPACES', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* postSpaces(action) {
  try {
    const spaces = yield axios.post('/api/spaces', action.payload);
    yield put({ type: 'FETCH_SPACES', payload: spaces.data });
  } catch (error) {
    console.log('Spaces POST request failed', error);
  }
}

function* spacesSaga() {
  yield takeLatest('FETCH_SPACES', fetchSpaces);
  yield takeLatest('POST_SPACE', postSpaces);
}

export default spacesSaga;

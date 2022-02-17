import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchSpaces(action) {
  try {
    const response = yield axios.get('/api/spaces/userspaces', {params:{id:action.payload}});
    console.log ('response.data', response.data)
    yield put({ type: 'SET_SPACES', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* postSpaces(action) {
  try {
    const spaces = yield axios.post('/api/spaces', action.payload);
    console.log ('in PostSpaces:', response.data[0].spaces_id)
    yield put({ type: 'FETCH_SPACES', payload:  response.data[0].spaces_id});
  } catch (error) {
    console.log('Spaces POST request failed', error);
  }
}

function* updateSpace( action ){
  console.log( 'in *updateSpaceSaga:', action);
  try {
    const response = yield axios.put(`/api/spaces/${action.payload.id}`, action.payload);
    console.log ('updateSpace Sage:', action.payload)
    yield put({type: 'FETCH_SPACES'})
  } catch (err) {
      console.log('error:', err);
  }
}

function* deleteSpace( action ){
  console.log( 'in *deleteSpaceSaga:', action);
  try {
    const response = yield axios.delete(`/api/spaces/delete/${action.payload}`);
    console.log ('in delete Return GET:', response.data)
    yield put({type: 'FETCH_SPACES', payload:response.data})
  } catch (err) {
      console.log('error:', err);
  }
}


function* spacesSaga() {
  yield takeLatest('FETCH_SPACES', fetchSpaces);
  yield takeLatest('POST_SPACE', postSpaces);
  yield takeLatest('DELETE_SPACE', deleteSpace);
  yield takeLatest('UPDATE_SPACE', updateSpace);
}

export default spacesSaga;

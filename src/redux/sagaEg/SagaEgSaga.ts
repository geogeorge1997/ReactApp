import {
  takeEvery,
  put
} from 'redux-saga/effects'

import {
  SAGA_REQUEST,
  SAGA_SUCCESS
} from './SagaEgActionTypes'

import * as API from '../../network/API'

function * readSagaData (): any {
  console.log('readSagaData')
  try {
    const response = yield API.readSagaDataAPI()
    yield put({
      type: SAGA_SUCCESS,
      payload: response
    })
  } catch (error) {
    console.log('Error Occured SagaEgSaga - ', error)
  }
}

export function * watchReadSagaData (): any {
  yield takeEvery(SAGA_REQUEST, readSagaData)
}

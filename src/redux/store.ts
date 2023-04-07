import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import loginReducer from './login/LoginReducer'

import createSagaMiddleware from '@redux-saga/core'
import { all, fork } from 'redux-saga/effects'

import { watchReadSagaData } from './sagaEg/SagaEgSaga'
import sagaEgReducer from './sagaEg/SagaEgReducer'

// Combining burgerReducer and pizzaReducer in rootReducer
const rootReducer = combineReducers({
  loginReducer,
  sagaEgReducer
})

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, thunk]

// Passing rootReducer to createStore
const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)))

export function * rootSaga (): any {
  yield all([
    fork(watchReadSagaData) //
  ])
}

sagaMiddleware.run(rootSaga)

export default store


import {
  SAGA_SUCCESS
} from './SagaEgActionTypes'
// initializing state
const initialState = {
  sagaData: ''
}
const sagaEgReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case SAGA_SUCCESS:
      return {
        ...state,
        sagaData: action.payload
      }
    default:
      return state
  }
}
export default sagaEgReducer

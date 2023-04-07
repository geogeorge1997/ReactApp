import { SET_LOGIN } from './LoginActionTypes'
// initializing state
const initialState = {
  token: false
}

const loginReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}

export default loginReducer

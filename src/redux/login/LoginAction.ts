import { SET_LOGIN } from './LoginActionTypes'

// import apiCall from '../../network/apiCall';
// import ErrorHandler from '../../helpers/ErrorHandler';
// import CONSTANTS from '../../util/constants';

export const setLogin = (parameter: any): any => {
  return {
    type: SET_LOGIN,
    payload: parameter
  }
}

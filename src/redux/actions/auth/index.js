import {AUTHENTICATED, AUTH_USER} from '../../action-types';

export const setIsAuthenticated = payload => {
  return {type: AUTHENTICATED, payload};
};

export const setAuthUser = payload => {
  return {type: AUTH_USER, payload};
};

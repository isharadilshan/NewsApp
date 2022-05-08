import {AUTHENTICATED, AUTH_USER} from '../../action-types';

export const authInitialState = {
  isAuthenticated: false,
  authUser: {},
};

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {...state, isAuthenticated: action.payload};
    case AUTH_USER:
      return {...state, authUser: action.payload};
    default:
      return state;
  }
};

export default authReducer;

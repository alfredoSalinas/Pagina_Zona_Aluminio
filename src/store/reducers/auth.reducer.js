import {SIGN_OUT, SIGN_IN, IS_READY} from '../types';

const initialState = {
  authReady:false,
  isSignin: false,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
        isSignin: true,
        authReady: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignin: false,
        authReady: false,
      };
    case IS_READY:
      return {
        ...state,
        authReady: action.payload
      };
    default:
      return state;
  }
};

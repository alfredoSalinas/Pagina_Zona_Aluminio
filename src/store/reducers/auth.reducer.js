import {SIGN_OUT, SIGN_IN} from '../types';

const initialState = {
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
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignin: false,
      };
    default:
      return state;
  }
};

import {SIGN_OUT, SIGN_IN} from '../types';

const signIn = (user) => ({
    type: SIGN_IN,
    payload: user
});

const signOut = () => {
  return (dispatch) => {
    dispatch({type: SIGN_OUT});
  };
};

export {signIn, signOut};

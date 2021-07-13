import {SIGN_OUT, SIGN_IN, IS_READY} from '../types';

const signIn = (user) => ({
    type: SIGN_IN,
    payload: user
});

const signOut = () => {
  return (dispatch) => {
    dispatch({type: SIGN_OUT});
  };
};

const authReady = (auth) =>({
  type: IS_READY,
  payload: auth
})

export {signIn, signOut, authReady};

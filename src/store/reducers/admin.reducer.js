import {ADMIN} from '../types';

const initialState = {
  isAdmin : false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN:
      return {
        isAdmin: action.payload,
      };
    default:
      return state;
  }
};

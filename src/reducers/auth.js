import { Auth } from 'actions';

const initialState = {
  isFetching: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Auth.AUTH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case Auth.AUTH_USER_RECEIVE:
      return {
        ...state,
        isFetching: false,
        user: action.user,
      };
    case Auth.AUTH_LOGOUT:
      return {
        ...state,
        isFetching: false,
        user: null,
      };
    default:
      return state;
  }
}



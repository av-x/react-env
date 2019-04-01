import api from 'utils/api';

/**
 * Action constants
 */
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_USER_RECEIVE = 'AUTH_USER_RECEIVE';

export function login() {
  return (dispatch) => {
    dispatch({ type: AUTH_REQUEST });

    return api.request('get', `${process.env.API_URL}/avexpense/user-data.json`).then(
      (data) => {
        dispatch({ type: AUTH_USER_RECEIVE, user: data });
      },
      (error) => {
        dispatch({ type: AUTH_USER_RECEIVE, user: null });
      },
    );
  };
}


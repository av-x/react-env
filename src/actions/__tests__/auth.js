import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as Auth from '../auth';

const mockStore = configureMockStore([thunk]);

describe('Actions: Auth', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('login() - 200', () => {
    fetchMock.getOnce('http://localhost:3333/login', { status: 200 });

    const expectedActions = [
      { type: Auth.AUTH_REQUEST },
      { type: Auth.AUTH_USER_RECEIVE, user: loginResponse },
    ];

    const store = mockStore({ Auth: {} });

    return store.dispatch(Auth.login()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
})

const loginResponse = {
  id: 1,
  email: 'art@vitiuk.io',
  first_name: 'Art',
  last_name: 'Vitiuk',
};


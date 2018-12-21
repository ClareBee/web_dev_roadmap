import * as actions from './actions';
import * as constants from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search', () => {
  const text = 'abc';
  const expectedAction = {
    type: constants.CHANGE_SEARCH_FIELD,
    payload: text
  }
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('should request robots', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const expectedAction = {
    type: constants.REQUEST_ROBOTS_PENDING
  }
  expect(action[0]).toEqual(expectedAction);
});

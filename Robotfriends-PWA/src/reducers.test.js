import * as actions from './actions';
import * as reducers from './reducers';
import { REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAIL } from './constants';

describe('search robots', () => {
  const initialStateSearch = {
    searchField: ''
  }
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it('should return a new state after handle change in searchField', () => {
    expect(reducers.searchRobots(initialStateSearch, actions.setSearchField('abc'))).toEqual({searchField: 'abc'});
  });
});


describe('request robots', () => {
  const initialStateRobots = {
    robots: [],
    error: "",
    isPending: false
  }
  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle pending', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    })).toEqual({isPending: true, error: "", robots: []});
  });

  it('should handle failure', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAIL,
      payload: 'oops'
    })).toEqual({isPending: false, error: 'oops', robots: []});
  });

  it('should handle success', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: 1,
        name: 'Bob',
        username: 'Bobby',
        email: 'bobby@example.com'
      }]
    })).toEqual({isPending: false, error: '', robots: [{
      id: 1,
      name: 'Bob',
      username: 'Bobby',
      email: 'bobby@example.com'
    }]});
  });
});

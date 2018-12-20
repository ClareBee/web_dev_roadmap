import * as actionTypes from './constants.js';

export const setSearchField = (text) => ({
  type: actionTypes.CHANGE_SEARCH_FIELD,
  payload: text
});

// higher order function - function returning a function
// provides dispatch to promise thanks to thunk
export const requestRobots = () => (dispatch) => {
  dispatch({ type: actionTypes.REQUEST_ROBOTS_PENDING});
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => dispatch({type: actionTypes.REQUEST_ROBOTS_SUCCESS, payload: data}))
  .catch(error => dispatch({type: actionTypes.REQUEST_ROBOTS_FAIL, payload: error}))
}

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const defaultState = {
  user: {},
  isLoading: false,
  error: "",
  showLogin: true,
  tasks: [
    { name: "Task 1", status: false },
    { name: "Task 2", status: false },
    { name: "Task 3", status: false },
    { name: "Task 4", status: false },
    { name: "Task 5", status: false }
  ],
  shouldshowOnlyCompleted: false
}

const setUsers = (state, user, isLoading, showLogin) => ({
  ...state, user, isLoading, showLogin
})

const toggleLoader = (state, isLoading, error = "") => ({
  ...state, isLoading, error
});

const logoutUser = (state, user, showLogin) => ({
  ...state, user, showLogin
});

const updateTask = (state, tasks) => ({ ...state, tasks });

const toggleDisplayStatus = state => ({ ...state, shouldshowOnlyCompleted: !state.shouldshowOnlyCompleted });

const resultsReducer = (state = defaultState || {}, { type = "", user = {}, tasks = [],  isLoading = false, error = "", showLogin }) => {
	switch (type) {
    case 'GET_USERS':
      return toggleLoader(state, isLoading);
    case 'GET_USERS_SUCCESS':
      return setUsers(state, user, isLoading, showLogin);
    case 'GET_USERS_FAILURE':
      return toggleLoader(state, isLoading, error);
    case 'LOG_OUT':
      return logoutUser(state, user, showLogin);
    case 'UPDATE_TASKS':
      return updateTask(state, tasks);
    case 'TOGGLE_DISPLAY_STATUS':
      return toggleDisplayStatus(state);
    default: return state;
  }
}

const RootReducer = combineReducers({
  router: routerReducer,
  app: resultsReducer,
});

export default RootReducer;

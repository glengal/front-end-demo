
const endpoint = "https://jsonplaceholder.typicode.com/users";

const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

const fetchUsers = () => {
  return fetch(endpoint)
    .then(status)
    .then(response => response.json())
};

const findUser = (email, users) =>
  users.find(({email: existingEmail}) => existingEmail.toLowerCase() === email);

const getUsers = () => ({
  type: 'GET_USERS',
  isLoading: true,
});

const getUsersSuccess = user => ({
  type: 'GET_USERS_SUCCESS',
  isLoading: false,
  user,
  showLogin: false
});

const getUsersFailure = error => ({
  type: 'GET_USERS_FAILURE',
  isLoading: false,
  error
});

const login = email => {
	return dispatch => {
    dispatch(getUsers());
    return fetchUsers()
      .then(response => {
        const loggedInUser = findUser(email, response);
         loggedInUser ?
          dispatch(getUsersSuccess(loggedInUser))
          :
          dispatch(getUsersFailure("Sorry, no users under this email. Please try a different email"))

      })
      .catch(error =>
        dispatch(getUsersFailure("Sorry, something went wrong. Please try again later"))
      );
  }
};

const logout = () => ({
  type: 'LOG_OUT',
  user: {},
  showLogin: true
});

const updateTasks = tasks => ({
  type: 'UPDATE_TASKS',
  tasks
});

const toggleDisplayStatus = () => ({
  type: 'TOGGLE_DISPLAY_STATUS'
})


export {
  login,
  logout,
  updateTasks,
  toggleDisplayStatus
 };

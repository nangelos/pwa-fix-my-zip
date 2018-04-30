import axios from 'axios';
import history from '../history';

// ACTION TYPES
const GET_ISSUE = 'GET_ISSUE';
const GET_ISSUES = 'GET_ISSUES';
const ADD_ISSUE = 'ADD_ISSUE';
const EDIT_ISSUE = 'EDIT_ISSUE';

// ACTION CREATORS
export const getIssue = issue => ({ type: GET_ISSUE, issue });
export const getIssues = issues => ({ type: GET_ISSUES, issues });
export const createIssue = issue => ({ type: ADD_ISSUE, issue });
export const updateIssue = issue => ({ type: EDIT_ISSUE, issue });

// THUNK CREATORS
export const fetchIssues = () => {
  return function thunk(dispatch) {
    return axios
      .get('/api/issues')
      .then(res => res.data)
      .then(issues => dispatch(getIssues(issues)))
      .catch(err => console.error(err));
  };
};

export const fetchIssue = id => {
  return function thunk(dispatch) {
    return axios
      .get(`/api/issues/${id}`)
      .then(res => res.data)
      .then(issue => dispatch(getIssue(issue)))
      .catch(err => console.error(err));
  };
};

export const addIssue = newIssue => {
  return function thunk(dispatch) {
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: newIssue,
      url: '/api/issues',
    };
    return (
      axios(options)
        // .post('/api/issues', newIssue)
        .then(issue => {
          dispatch(createIssue(issue));
          history.push('/response');
        })
        .catch(err => console.error(err))
    );
  };
};

export const editIssue = (id, changes) => {
  return function thunk(dispatch) {
    return axios
      .put(`/api/issues/${id}`, changes)
      .then(updatedIssue => dispatch(updateIssue(changes)))
      .catch(err => console.error(err));
  };
};

// REDUCER
const issueReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ISSUE: {
      return [...state, action.issue];
    }

    case GET_ISSUES: {
      return action.issues;
    }

    case ADD_ISSUE: {
      return [...state, action.issue];
    }

    case EDIT_ISSUE: {
      return Object.assign({}, state, action.issue);
    }

    default:
      return state;
  }
};

export default issueReducer;

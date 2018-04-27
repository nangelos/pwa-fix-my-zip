import { combineReducers } from 'redux';
import issues from './issues';
import users from './users';

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

// export default rootReducer

const rootReducer = combineReducers({ issues, users });

export default rootReducer;

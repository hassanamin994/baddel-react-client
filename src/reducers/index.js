import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer.';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  categories: categoriesReducer

});

export default rootReducer;

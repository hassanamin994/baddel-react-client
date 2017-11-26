import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer.';
import categoriesReducer from './categories';
import productsReducer from './products';


const rootReducer = combineReducers({
  form,
  auth: authReducer,
  categories: categoriesReducer,
  products: productsReducer 

});

export default rootReducer;

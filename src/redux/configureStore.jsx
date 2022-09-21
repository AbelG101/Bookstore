import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import checkStatusReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  checkStatus: checkStatusReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;

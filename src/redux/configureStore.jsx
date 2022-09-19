import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import checkStatusReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    checkStatus: checkStatusReducer,
  },
});

export default store;

import axios from 'axios';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOK = 'GET_BOOK';
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OoMg7JW7xItdmWuHqq1t/books/';

const addBook = (id, title, author) => (dispatch) => {
  axios.post(API_URL, {
    item_id: id,
    title,
    author,
    category: 'Fiction',
  }).then(() => {
    dispatch({
      type: ADD_BOOK,
      book: {
        id,
        title,
        author,
      },
    });
  });
};

const removeBook = (id) => (dispatch) => {
  const deleteUrl = `${API_URL}${id}`;
  axios.delete(deleteUrl, {
    item_id: id,
  }).then(() => {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  });
};

const fetchBooks = () => (dispatch) => {
  axios.get(API_URL).then((response) => {
    const books = Object.keys(response.data).map((key) => {
      const book = response.data[key][0];
      return {
        id: key,
        ...book,
      };
    });
    dispatch({ type: GET_BOOK, payload: books });
  });
};

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.book.id,
          title: action.book.title,
          author: action.book.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOK:
      return [
        ...action.payload,
      ];
    default: return state;
  }
};

export default bookReducer;
export { addBook, removeBook, fetchBooks };

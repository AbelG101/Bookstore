import axios from 'axios';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOK = 'GET_BOOK';

const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  book: {
    id,
    title,
    author,
  },
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const fetchBooks = () => (dispatch) => {
  axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OoMg7JW7xItdmWuHqq1t/books/').then((response) => {
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
      console.log(...action.payload);
      return [
        ...action.payload,
      ];
    default: return state;
  }
};

export default bookReducer;
export { addBook, removeBook, fetchBooks };

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

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

const initialState = [
  {
    id: '',
    title: 'The Hunger Games',
    author: 'Suzan Collins',
  },
  {
    id: '1',
    title: 'Harry Potter',
    author: 'J.K.Rowling',
  },
  {
    id: '2',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
  },
];

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
    default: return state;
  }
};

export default bookReducer;
export { addBook, removeBook };

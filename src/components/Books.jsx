import { React } from 'react';
import Book from './Book';

const Books = () => {
  const book = {
    title: 'Harry Potter',
    author: 'Susan Daniel',
  };
  return (
    <>
      <Book book={book} />
      <Book book={book} />
      <Book book={book} />
    </>
  );
};

export default Books;

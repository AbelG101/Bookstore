import { React } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      {books.map(({ id, title, author }) => (
        <Book key={id} id={id} title={title} author={author} />
      ))}
    </>
  );
};

export default Books;

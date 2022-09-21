import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <>
      {books.map(({ id, title, author }) => (
        <Book key={id} id={id} title={title} author={author} />
      ))}
    </>
  );
};

export default Books;

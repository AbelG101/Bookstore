import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const handleEvent = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const title = document.querySelector('.title-input').value;
    const author = document.querySelector('.author-input').value;
    axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OoMg7JW7xItdmWuHqq1t/books/', {
      item_id: id,
      title,
      author,
      category: 'Fiction',
    }).then(() => {
      dispatch(addBook(id, title, author));
    });
  };
  return (
    <section className="add-book-container">
      <div className="horizontal-divider" />
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-book-form">
        <input type="text" className="title-input" placeholder="Book title" />
        <input type="text" className="author-input" placeholder="Book author" />
        <button onClick={handleEvent} type="submit" className="add-book-btn">Add book</button>
      </form>
    </section>
  );
};

export default AddBookForm;

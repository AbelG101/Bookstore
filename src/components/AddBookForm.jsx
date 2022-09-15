import React from 'react';

const AddBookForm = () => (
  <section className="add-book-container">
    <div className="horizontal-divider" />
    <h2 className="form-title">ADD NEW BOOK</h2>
    <form className="add-book-form">
      <input type="text" className="title-input" placeholder="Book title" />
      <input type="text" className="author-input" placeholder="Book author" />
      <button type="submit" className="add-book-btn">Add book</button>
    </form>
  </section>
);

export default AddBookForm;

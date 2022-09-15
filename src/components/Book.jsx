import React from 'react';

const Book = ({ book: { title, author } }) => (
  <div className="book">
    <div className="book-info">
      <div className="book-name">{title}</div>
      <div className="author">{author}</div>
      <div className="action-btns-container">
        <button type="button" className="action-btn">Comments</button>
        <div className="vertical-divider" />
        <button type="button" className="action-btn">Remove</button>
        <div className="vertical-divider" />
        <button type="button" className="action-btn">Edit</button>
      </div>
    </div>
    <div className="progress-info">
      <div className="progress-amount">
        <div className="progress-bar" />
        <div className="progress-percent">
          <div className="amount">64%</div>
          <div className="completion">Completed</div>
        </div>
      </div>
      <div className="progress-divider" />
      <div className="chapter-info">
        <div className="heading">CURRENT CHAPTER</div>
        <div className="current-chapter">Chapter 17</div>
        <button type="button" className="update-progress-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  </div>
);

export default Book;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const status = useSelector((state) => state.checkStatus);
  const dispatch = useDispatch();

  return (
    <>
      <div className="category-container">
        <div className="category-info">
          <p>{status}</p>
          <button className="check-status-btn" onClick={() => dispatch(checkStatus())} type="button">Check status</button>
        </div>
      </div>
    </>
  );
};

export default Category;

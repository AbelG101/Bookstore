import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const status = useSelector((state) => state.checkStatus);
  const dispatch = useDispatch();

  return (
    <>
      <p>{status}</p>
      <button onClick={() => dispatch(checkStatus())} type="button">Check status</button>
    </>
  );
};

export default Category;

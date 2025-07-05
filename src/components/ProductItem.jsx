import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, title, description, image }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ id, title, description, image }));
  };

  return (
    <div className="card m-4" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/products/${id}`} className="btn btn-outline-info">
            View
          </Link>
          <button className="btn btn-primary" onClick={handleAdd}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

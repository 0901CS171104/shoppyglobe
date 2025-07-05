import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, selectCartItems } from '../store/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={item.image} className="img-fluid" alt={item.title} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <Link to="/checkout" className="btn btn-success mt-3">
          Proceed to Checkout
        </Link>
      )}
    </div>
  );
};

export default Cart;

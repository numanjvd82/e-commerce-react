import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Products from './components/Products/Products';
import { clearCart } from './actions/cartActions';

function App() {
  const cartState = useSelector((state) => state.product);
  if (cartState.length === 0) {
    return (
      <>
        <h1 style={{ margin: '1rem 0', textAlign: `center` }}>
          No items in the Cart
          <span style={{ fontSize: `3.5rem`, display: 'block' }}>
            Refresh to display cart items again.
          </span>
        </h1>
      </>
    );
  }

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container">
      <button onClick={() => handleDelete()} className="btn-clear">
        Clear Products
      </button>
      <h1 style={{ margin: '1rem 0', textAlign: `center` }}>
        E-commerce Shopping Cart
      </h1>
      <Products />
    </div>
  );
}

export default App;

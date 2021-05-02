import React from 'react';
import { useSelector } from 'react-redux';
import Products from './components/Products/Products';

function App() {
  const cartState = useSelector((state) => state.product);
  if (cartState.length === 0) {
    return (
      <h1 style={{ margin: '1rem 0', textAlign: `center` }}>
        No items in the Cart
      </h1>
    );
  }
  return (
    <div className="container">
      <h1 style={{ margin: '1rem 0', textAlign: `center` }}>
        E-commerce Shopping Cart
      </h1>
      <Products />
    </div>
  );
}

export default App;

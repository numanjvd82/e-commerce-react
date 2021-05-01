import React from 'react';
import Products from './components/Products/Products';

function App() {
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

import React from 'react';
import './Products.css';
import Product from '../Product/Product';
import { useSelector } from 'react-redux';

const Products = () => {
  const productData = useSelector((state) => state.data);

  return (
    <>
      <div className="products-container">
        <div className="function-title">
          <h4>Product</h4>
          <h4>Price</h4>
          <h4>QTY</h4>
          <h4>Total</h4>
        </div>
        {productData.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Products;

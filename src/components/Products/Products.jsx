import React from 'react';
import './Products.css';
import Product from '../Product/Product';
import { useSelector } from 'react-redux';

const Products = () => {
  const productData = useSelector((state) => state.product);
  const total = useSelector((state) => state.total);

  return (
    <>
      <div className="products-container">
        {productData.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
        <div className="products-total">
          <h2>Cart Total: ${total}</h2>
        </div>
      </div>
    </>
  );
};

export default Products;

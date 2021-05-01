import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { IoIosAdd } from 'react-icons/io';
import { IoMdRemove } from 'react-icons/io';
import './Product.css';

const Product = ({ product }) => {
  const { id, name, color, image, price, amount } = product;
  return (
    <>
      <div className="product-container">
        <div className="product-information">
          <img className="img" src={image} alt="Yellow Jacket" />
          <h4 className="title">{name}</h4>
          <p className="id">{id}</p>
          <p className="color">Color: {color}</p>
        </div>
      </div>
    </>
  );
};

export default Product;

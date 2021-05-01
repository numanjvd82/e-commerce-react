import React from 'react';
import { useSelector } from 'react-redux';
import { IoRemoveCircleOutline } from 'react-icons/io5';
import { IoIosAdd } from 'react-icons/io';
import { IoMdRemove } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../../actions/cartActions';
import './Product.css';

const Product = ({ product }) => {
  const total = useSelector((state) => state.productTotal);
  const { id, name, color, image, price, amount } = product;

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity());
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity());
  };

  return (
    <>
      <div className="product-container">
        <div className="product-information">
          <img className="img" src={image} alt="Yellow Jacket" />
          <h4 className="title">{name}</h4>
          <p className="id">Product ID: #{id}</p>
          <p className="color">Color: {color}</p>
        </div>
        <div className="product-price">
          <p className="price">Price: ${price}</p>
        </div>
        <div className="product-quantity">
          <p>Quantity:</p>
          <button onClick={() => handleIncrease()} className="btn btn-plus">
            <IoIosAdd />
          </button>
          <p className="quantity">{amount}</p>
          <button onClick={() => handleDecrease()} className="btn btn-minus">
            <IoMdRemove />
          </button>
        </div>
        <div className="product-total">
          Total: ${total}
          <button className="btn btn-delete">
            <IoRemoveCircleOutline />
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;

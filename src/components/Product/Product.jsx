import React, { useEffect } from 'react';
import { IoRemoveCircleOutline } from 'react-icons/io5';
import { IoIosAdd } from 'react-icons/io';
import { IoMdRemove } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  productTotal,
  deleteProduct,
  totalProductCost,
} from '../../actions/cartActions';
import './Product.css';

const Product = ({ product }) => {
  const cartProduct = useSelector((state) => state.product);
  const { id, name, color, image, price, amount, total } = product;

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(id));
  };

  const handleDelete = () => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    dispatch(productTotal(id));
  }, [amount]);

  useEffect(() => {
    dispatch(totalProductCost());
  }, [cartProduct]);

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
          <p>Total: ${total}</p>
          <button onClick={() => handleDelete()} className="btn btn-delete">
            <IoRemoveCircleOutline />
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;

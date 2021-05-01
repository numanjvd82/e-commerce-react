import { useEffect } from 'react';
import './Alert.css';

const Alert = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2900);
    return () => clearTimeout(timeout);
  });
  return <p className={`alert`}>{msg}</p>;
};

export default Alert;

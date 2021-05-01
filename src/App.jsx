import React from 'react';
import { useDispatch } from 'react-redux';
import { printSome } from './actions/cartActions';

function App() {
  const dispatch = useDispatch();

  const printSomething = () => {
    dispatch(printSome());
  };

  return <h1 onClick={printSomething}>React</h1>;
}

export default App;

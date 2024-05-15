/* eslint-disable react/prop-types */
import { useState } from 'react';

const Contador = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const counterIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h2>Valor del contador: {counter}</h2>
      <button
        onClick={() => {
          counterIncrement();
        }}
      >
        Increment +1
      </button>
    </>
  );
};

export default Contador;

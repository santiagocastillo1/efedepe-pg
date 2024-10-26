import { useState, useEffect } from "react";

const CartContainer = () => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {}, []); // ---> array de dependencias

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={sumar}>sumar</button>
    </div>
  );
};

export default CartContainer;

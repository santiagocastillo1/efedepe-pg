import { useState } from "react";
const Counter = () => {
  const [contador, funcionContador] = useState(0);

  const sumar = () => {
    funcionContador(contador + 1);
  };
  const restar = () => {
    funcionContador(contador - 1);
  };
  return (
    <div>
      <h2>Contador = {contador}</h2>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
    </div>
  );
};

export default Counter;

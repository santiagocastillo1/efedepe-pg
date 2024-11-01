import { useState } from "react";
const Counter = ({ stock, agregarAlCarrito }) => {
  const [contador, funcionContador] = useState(0);

  const sumar = () => {
    stock > contador ? funcionContador(contador + 1) : alert("stock maximo");
  };
  const restar = () => {
    funcionContador(contador - 1);
  };
  return (
    <div>
      <h2>Contador = {contador}</h2>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
      <button onClick={() => agregarAlCarrito(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;

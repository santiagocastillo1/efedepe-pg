import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let totalEnElCarrito = getTotalAmount();

  return (
    <div>
      <h1>Aca el carrito</h1>
      {cart.map((myProducts) => {
        return (
          <div
            key={myProducts.id}
            style={{
              border: "2px solid black",
              width: "300px",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <h2>{myProducts.title}</h2>
            <h3>cantidad : {myProducts.quantity}</h3>
            <button onClick={() => removeById(myProducts.id)}>eliminar</button>
          </div>
        );
      })}
      {cart.length > 0 && <button onClick={resetCart}>limpiar carrito</button>}

      <h2 style={{ color: cart.length > 0 ? "red" : "blue" }}>
        el total a pagar es {totalEnElCarrito}
      </h2>

      <Link to="/checkout" style={{ color: "black" }}>
        Finalizar comprar
      </Link>
    </div>
  );
};

export default CartContainer;

import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./cartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Verificar que cart es válido y calcular la cantidad total
  const totalQuantity = Array.isArray(cart) ? cart.length : 0;

  return (
    <Link to="/cart" className="cart-widget">
      <AiOutlineShoppingCart />
      {totalQuantity > 0 && <span>{totalQuantity}</span>}
    </Link>
  );
};

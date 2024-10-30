import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./cartWidget.css";
export const CartWidget = () => {
  return (
    <Link to="/cart">
      <AiOutlineShoppingCart />
      <span>0</span>
    </Link>
  );
};

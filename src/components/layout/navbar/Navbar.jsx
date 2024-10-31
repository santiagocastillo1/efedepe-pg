import { Link } from "react-router-dom";
import { CartWidget } from "../../common/Card/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = ({ darkMode }) => {
  console.log("navbar", darkMode);

  return (
    <>
      <div
        className={
          darkMode ? "container-navbar-dark navbar" : " container-navbar navbar"
        }
      >
        <Link to={"/"}>
          <img
            src="https://res.cloudinary.com/dnbod0hzh/image/upload/v1729976869/876e8d28-3899-447c-9ed2-28a53a2aff4b_b03nyd.jpg"
            alt=""
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </Link>
        <ul style={{ display: "flex", gap: "10px" }}>
          <Link to="/category/Varios">Varios</Link>
          <Link to="/category/Peliculas">Peliculas</Link>
          <Link to="/category/Argentina">Argentina</Link>
        </ul>
        <div>
          <CartWidget />
        </div>
      </div>
    </>
  );
};

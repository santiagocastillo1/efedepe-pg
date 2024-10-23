import { CartWidget } from "../../common/Card/cartWidget/CartWidget";
import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <div className="container-navbar">
        <h2>EFEDEPE.PG</h2>
        <ul>
          <li>stickers</li>
          <li>vinilos</li>
          <li>materas</li>
        </ul>
        <div>
          <CartWidget />
        </div>
      </div>
    </>
  );
};

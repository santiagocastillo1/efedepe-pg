import { Link } from "react-router-dom";

export const Card = ({ title, price, stock, image, id }) => {
  return (
    <div style={{ border: "2px solid black", width: "300px", height: "200px" }}>
      <img
        src={image}
        alt={title}
        style={{ width: "195px", height: "100px" }}
      />
      <h2>Título: {title}</h2>
      <h3>Precio: {price}</h3>
      <h3>Stock: {stock}</h3>
      <Link to={`/itemDetail/${id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};

export const Card = ({ title, price, stock, image }) => {
  return (
    <div style={{ border: "2px solid black", width: "200px", height: "200px" }}>
      <img
        src={image}
        alt={title}
        style={{ width: "195px", height: "100px" }}
      />
      <h2>Título: {title}</h2>
      <h3>Precio: {price}</h3>
      <h3>Stock: {stock}</h3>
    </div>
  );
};

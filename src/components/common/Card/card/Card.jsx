export const Card = ({ title, price, stock }) => {
  return (
    <div style={{ border: "2px solid black", width: "200px", height: "300px" }}>
      <h2>Titulo: {title}</h2>
      <h3>Precio: {price}</h3>
      <h3>Stock: {stock}</h3>
    </div>
  );
};

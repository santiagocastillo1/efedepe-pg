import Counter from "../../common/counter/Counter";

const ItemDetail = ({ myProducts, agregarAlCarrito, totalInCart }) => {
  return (
    <div>
      <h2>{myProducts.title}</h2>
      <h2>{myProducts.description}</h2>
      <img src={myProducts.imageUrl} alt="" />

      <Counter
        stock={myProducts.stock}
        agregarAlCarrito={agregarAlCarrito}
        totalInCart={totalInCart}
      />
    </div>
  );
};

export default ItemDetail;

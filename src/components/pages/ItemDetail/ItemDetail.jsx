import Counter from "../../common/counter/Counter";
import { ItemListContainer } from "../itemListContainer/ItemListContainer";

const ItemDetail = ({ myProducts, agregarAlCarrito }) => {
  return (
    <div>
      <h2>{myProducts.title}</h2>
      <h2>{myProducts.description}</h2>
      <img src={myProducts.imageUrl} alt="" />

      <Counter stock={myProducts.stock} agregarAlCarrito={agregarAlCarrito} />
    </div>
  );
};

export default ItemDetail;
<ItemListContainer />;

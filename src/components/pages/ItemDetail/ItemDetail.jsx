import { ItemListContainer } from "../itemListContainer/ItemListContainer";

const ItemDetail = ({ myProducts }) => {
  return (
    <div>
      <h2>{myProducts.title}</h2>
    </div>
  );
};

export default ItemDetail;
<ItemListContainer />;

import { ItemListContainer } from "../itemListContainer/ItemListContainer";

const ItemDetail = ({ myProducts }) => {
  return (
    <div>
      <h2>{myProducts.title}</h2> <img src={myProducts.imageUrl} alt="" />
    </div>
  );
};

export default ItemDetail;
<ItemListContainer />;

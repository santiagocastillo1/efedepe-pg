import { Card } from "../../common/Card/card/Card";

export const ItemList = ({ myProducts }) => {
  return (
    <>
      {myProducts.map(({ id, title, price, stock, imageUrl }) => (
        <Card
          key={id}
          title={title}
          price={price}
          stock={stock}
          image={imageUrl}
        />
      ))}
    </>
  );
};

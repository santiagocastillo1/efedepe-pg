import { Card } from "../../common/Card/card/Card";

export const ItemListContainer = ({ darkMode }) => {
  console.log("itemList", darkMode);

  return (
    <div>
      <Card title="nike" price={1200} stock={5} />
      <Card />
      <Card />
    </div>
  );
};

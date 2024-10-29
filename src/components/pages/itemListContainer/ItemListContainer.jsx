import { products } from "../../../products";
import "./itemListContainer.css";
import { useState, useEffect } from "react";
import { ItemList } from "../../common/ItemList/ItemList";

let myProductspromise = new Promise((res, rej) => {
  setTimeout(() => {
    if (products.length === 0) {
      rej("Productos Vacíos");
    } else {
      res(products);
    }
  }, 2000);
});

export const ItemListContainer = () => {
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    myProductspromise
      .then((data) => {
        setMyProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="il-container">
      <ItemList myProducts={myProducts} />
    </div>
  );
};

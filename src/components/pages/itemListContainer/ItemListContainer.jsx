import { products } from "../../../products";
import "./itemListContainer.css";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { name } = useParams();
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    const UnaFraccion = products.filter(
      (producto) => producto.category === name
    );
    const getProducts = new Promise((resolve) => {
      resolve(name ? UnaFraccion : products);
    });
    getProducts.then((res) => {
      setMyProducts(res);
    });
  }, [name]);

  return (
    <div className="il-container">
      <ItemList myProducts={myProducts} />
    </div>
  );
};

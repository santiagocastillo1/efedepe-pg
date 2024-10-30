import { useEffect } from "react";
import { useState } from "react";
import { products } from "../../../products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  let id = "1";
  const [myProducts, setMyProducts] = useState({});

  useEffect(() => {
    let productSelected = products.find((producto) => producto.id === id);
    setMyProducts(productSelected);
  }, [id]);
  return <ItemDetail myProducts={myProducts} />;
};

export default ItemDetailContainer;

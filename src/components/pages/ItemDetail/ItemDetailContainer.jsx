import { useEffect } from "react";
import { useState } from "react";
import { products } from "../../../products";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [myProducts, setMyProducts] = useState({});

  useEffect(() => {
    let productSelected = products.find((producto) => producto.id === id);
    setMyProducts(productSelected);
  }, [id]);
  return <ItemDetail myProducts={myProducts} />;
};

export default ItemDetailContainer;

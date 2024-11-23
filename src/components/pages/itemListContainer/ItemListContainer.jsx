import "./itemListContainer.css";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore"; // addDoc para agregar una funcion

export const ItemListContainer = () => {
  const { name } = useParams(); //undefined
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");

    let docsRef = productsCollection;
    if (name) {
      docsRef = query(productsCollection, where("category", "==", name));
    }
    getDocs(docsRef).then((res) => {
      let array = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setMyProducts(array);
    });
  }, [name]);

  return (
    <div className="il-container">
      <ItemList myProducts={myProducts} />
    </div>
  );
};

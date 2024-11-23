// import { useContext, useEffect , useState} from "react";
// import ItemDetail from "./ItemDetail";
// import { useParams } from "react-router-dom";
// import { CartContext } from "../../../context/CartContext";

// import { db } from "../../../firebaseConfig";
// import { collection, doc, getDoc } from "firebase/firestore";

// const ItemDetailContainer = () => {
//   const { id } = useParams();
//   const { addToCart, getTotalQuantity } = useContext(CartContext);

//   let totalInCart = getTotalQuantity(id);

//   const [myProducts, setMyProducts] = useState({});

//   useEffect(() => {
//     const productsCollection = collection(db, "products");
//     const docRef = doc(productsCollection, id);
//     getDoc(docRef).then((res) => {
//       setMyProducts({ ...res.data(), id: res.id });
//     });
//   }, [id]);
//   const agregarAlCarrito = (cantidad) => {
//     let objeto = { ...myProducts, quantity: cantidad };
//     addToCart(objeto);
//   };
//   return (
//     <ItemDetail
//       myProducts={myProducts}
//       agregarAlCarrito={agregarAlCarrito}
//       totalInCart={totalInCart}
//     />
//   );
// };

// export default ItemDetailContainer;
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart, getTotalQuantity } = useContext(CartContext);

  // Cantidad total del producto en el carrito
  const totalInCart = getTotalQuantity ? getTotalQuantity(id) : 0;

  const [myProducts, setMyProducts] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productsCollection = collection(db, "products");
      const docRef = doc(productsCollection, id);
      const res = await getDoc(docRef);
      if (res.exists()) {
        setMyProducts({ ...res.data(), id: res.id });
      } else {
        console.error("Producto no encontrado.");
      }
    };

    fetchProduct();
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    if (myProducts) {
      const objeto = { ...myProducts, quantity: cantidad };
      addToCart(objeto);
    }
  };

  if (!myProducts) {
    return <p>Cargando producto...</p>;
  }

  return (
    <ItemDetail
      myProducts={myProducts}
      agregarAlCarrito={agregarAlCarrito}
      totalInCart={totalInCart}
    />
  );
};

export default ItemDetailContainer;

import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotalAmount } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    const total = getTotalAmount();
    const order = {
      buyer: userInfo,
      items: cart,
      total: total,
    };
    let refCollection = collection(db, "orders");
    addDoc(refCollection, order).then((res) => setOrderId(res.id));
  };

  const capturarInfo = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  if (orderId) {
    return <h2>gracias por tu compra tu ticket es : {orderId}</h2>;
  }

  return (
    <div>
      <form onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="santi castillo"
          name="name"
          onChange={capturarInfo}
        />
        <input
          type="text"
          placeholder="2235945920"
          name="phoneNumber"
          onChange={capturarInfo}
        />
        <input
          type="email"
          placeholder="santi@gmail.com"
          name="email"
          onChange={capturarInfo}
        />
        <button>comprar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Checkout;

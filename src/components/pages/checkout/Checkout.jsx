import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    console.log(userInfo);
  };

  const capturarInfo = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

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
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
};

export default Checkout;

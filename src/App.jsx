410; // import { Footer } from "./components/layout/footer/Footer";
import { useState } from "react";
//import Counter from "./components/common/counter/Counter";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const cambiarModo = () => {
    setDarkMode(!darkMode);
  };

  const [entraEnElDom, setEntraEnElDom] = useState(false);
  const montarOdesmontar = () => {
    setEntraEnElDom(!entraEnElDom);
  };

  return (
    <>
      <Navbar darkMode={darkMode} />
      <button onClick={cambiarModo}>Cambiar modo</button>
      <ItemListContainer darkMode={darkMode} />
      {/* <Footer /> */}
      {/* <Counter /> */}
      <button onClick={montarOdesmontar}>Montar y desmontar</button>
      {entraEnElDom ? <CartContainer /> : null}
    </>
  );
}

export default App;

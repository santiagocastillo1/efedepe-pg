import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (myProducts) => {
    // let isInCart = cart.filter (el => el.id === myProducts.id) // []
    // let isInCart =cart.find(el => el.id === myProducts.id)// elemento || undefined
    let isInCart = cart.some((el) => el.id === myProducts.id); // siempre devuelve un booleano

    if (isInCart) {
      //generar un nuevo array, igual que el anterior pero con un {} modificado
      // con ese array remplazar el anterior
      let nuevoArray = cart.map((elemento) => {
        if (elemento.id === myProducts.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + myProducts.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(nuevoArray);
    } else {
      setCart([...cart, myProducts]);
    }
  };

  const resetCart = () => {
    setCart([]);
  };

  const removeById = (id) => {
    // filter --> todos los que no sean el del id que quiero eliminar
    //genero un array con todos excepto con el que quiero eliminar
    //[con todos excepto 1] --> setcart (con ese array)

    let arrayFiltrado = cart.filter((elemento) => elemento.id !== id);
    setCart(arrayFiltrado);
  };

  const getTotalQuantity = (id) => {
    const product = cart.find((elemento) => elemento.id === id);
    return product ? product.quantity : 0;
    // if (product) {
    //   return product.quantity;
    // } else {
    //   return 0;
    // }
  };

  const getTotalAmount = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0); // devuelve el acumulador

    return total;
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeById,
        resetCart,
        getTotalQuantity,
        getTotalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

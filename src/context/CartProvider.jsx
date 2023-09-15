import { createContext, useContext, useState } from "react";
import { SideBarContext } from "./SideBarProvider";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Side Bar Context
  const { setShow } = useContext(SideBarContext);

  // Cart State
  const [cart, setCart] = useState([]);

  // Add to cart function
  const addToCart = (product, id) => {
    const productClone = { ...product, amount: 1 };

    // Check If Product Is Already Exist
    const findProduct = cart.find((item) => item.id === id);

    if (findProduct) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: findProduct.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, productClone]);
    }
    setShow(true);
  };

  // Remove Product From Cart
  const removeFromCart = (id) => {
    // Get The Deleted Product
    const filteredCart = cart.filter((e) => {
      return e.id !== id;
    });

    setCart(filteredCart);
  };

  // Increase Amount
  const increaseAmount = (id) => {
    const findProduct = cart.find((item) => item.id === id);

    addToCart(findProduct, id);
  };

  // Decrease Amount
  const decreaseAmount = (id) => {
    const findProduct = cart.find((item) => item.id === id);

    if (findProduct) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: findProduct.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      if (findProduct.amount < 2) {
        removeFromCart(id);
      }
    }
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Total Price of Products in Cart
  const totalPrice = cart.reduce((acc, product) => {
    acc = acc + product.price * product.amount;
    return acc;
  }, 0);

  // Context Values
  const values = {
    addToCart,
    cart,
    removeFromCart,
    increaseAmount,
    decreaseAmount,
    clearCart,
    totalPrice,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;

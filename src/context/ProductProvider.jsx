import { createContext, useEffect, useState } from "react";
import { api_URL } from "../api/api_URL";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Fetching the data from tha api
  useEffect(() => {
    fetch(api_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

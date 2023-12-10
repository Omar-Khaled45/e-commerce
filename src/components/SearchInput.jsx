import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductProvider";
import { Link } from "react-router-dom";

const SearchInput = () => {
  const { products } = useContext(ProductContext);

  // Input State
  const [value, setValue] = useState("");

  // Result State
  const [results, setResults] = useState([]);

  // Filter Products to Clothing
  const filteredProducts = products.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing"
    );
  });

  // Handle Change Function
  const handleChange = (value) => {
    setValue(value);
    const searchResults = filteredProducts.filter((product) => {
      return product.title && product.title.includes(value);
    });

    setResults(searchResults);
  };

  return (
    <form className="form mx-3" onSubmit={(e) => e.preventDefault()}>
      <button className="d-flex align-items-center">
        <svg
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
          className="mt-0"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <input
        className="input"
        placeholder="Search"
        required=""
        type="text"
        onChange={(e) => handleChange(e.target.value)}
      />
      {value && (
        <>
          <div className="results-wrapper">
            {results.length > 0 && (
              <ul className="list-unstyled mb-0">
                {results.map((product) => {
                  return (
                    <li>
                      <Link
                        to={`/product/${product.id}`}
                        className="product-wrapper d-flex text-black text-decoration-none"
                        onClick={() => setValue("")}
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="img-fluid me-4"
                        />
                        <div>
                          <h4 className="fw-bold">{product.title}</h4>
                          <p>$ {product.price}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
            {results.length === 0 && (
              <h2 className="text-center">
                Sorry, Nothing found for "{value}"
              </h2>
            )}
          </div>
        </>
      )}

      <button className="reset" type="reset">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mt-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          onClick={() => setValue("")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </form>
  );
};

export default SearchInput;

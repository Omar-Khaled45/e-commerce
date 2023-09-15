import AppNavbar from "./components/AppNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./pages/ProductDetails";
import CartSideBar from "./components/CartSideBar";

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <CartSideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

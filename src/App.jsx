import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/routes/Home";
import Login from "./Components/routes/Login";
import ProductDetail from "./Components/routes/ProductDetail";
import Header from "./Components/shared/Header";
import ProtectedRoutes from "./Components/routes/ProtectedRoutes";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./store/slices/products.slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="">
      <div className="">
        <Header className="main-h"></Header>
        <Routes>
          <Route path="/store/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/store" element={<Home />} />
            <Route path="/store/product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

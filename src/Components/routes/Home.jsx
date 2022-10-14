import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/products.slice";
import CardHome from "../home/CardHome";
import { setLogin } from "../../store/slices/login.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const goLogOff = () => dispatch(setLogin(null));
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    goLogOff();
    navigate(`/store/login`);
    console.log(isLogged);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const log = useSelector((state) => state.login);
  const products = useSelector((state) => state.products);

  return (
    <div className="home">
      <div className="home_container-card">
        {log && <button onClick={logOut}>Log Out</button>}
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <CardHome key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

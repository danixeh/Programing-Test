import axios from "axios";
import { useState, useEffect, react } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/todos/${id}`;
    axios
      .get(URL)
      .then((res) => setProductInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    navigate(`/store`);
  };

  return (
    <div className="card-home_body_dt">
      <h3 className="card-home_name_dr_dt">{productInfo?.title}</h3>
      <h3
        className={
          productInfo?.completed === false
            ? "card-home_name_blue"
            : "card-home_name_green"
        }
      >
        {productInfo?.completed === false ? "To do" : "work done"}
      </h3>
      <button className="login__btn" onClick={handleClick}>
        Go Back
      </button>
    </div>
  );
};

export default ProductDetail;

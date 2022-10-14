import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../store/slices/login.slice";

const FormLogin = () => {
  const dispatch = useDispatch();
  const goLogin = () => dispatch(setLogin("logged"));
  const { register, handleSubmit, reset } = useForm();
  const [badRequest, setBadRequest] = useState();
  const navigate = useNavigate();

  const submit = (data) => {
    const dataLogin = {
      email: "webtroniclabstest@gmail.com",
      password: "wT1234",
    };
    if (
      data.email === dataLogin.email &&
      data.password === dataLogin.password
    ) {
      const token = "892e7eff-d2e8-4452-9e25-0360b36acfef";
      localStorage.setItem("token", token);
      goLogin();
      navigate(`/store`);
    } else {
      setBadRequest("Incorrect Email or Password, please try again . . .");
    }
    reset({
      email: "webtroniclabstest@gmail.com",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="login__form">
      <h2 className="login__title">Welcome to WEBTRONICLABS test</h2>
      <p className="login_p">Enter your email and password to continue</p>
      <div className="signal">
        <h2 className="signal-t">Test Data</h2>
        <div className="signal-h">
          <i className="fa-thin fa fa-envelope"></i>
          <p className="signal-i">email: webtroniclabstest@gmail.com</p>
        </div>
        <div className="signal-h">
          <i className="fa-solid fa fa-lock"></i>
          <p className="signal-i">password: wT1234</p>
        </div>
      </div>
      <div className="login__div-email">
        <label className="login__label" htmlFor="email">
          Email
        </label>
        <input
          {...register("email")}
          className="login__input"
          type="email"
          id="email"
        />
      </div>
      <div className="login__div-password">
        <label className="login__label" htmlFor="password">
          Password
        </label>
        <input
          {...register("password")}
          className="login__input"
          type="password"
          id="password"
        />
        <p>please write a wrong password or mail to see a fail message... </p>
        <p className="p-fl">{badRequest}</p>
      </div>
      <button className="login__btn">Login</button>
    </form>
  );
};

export default FormLogin;

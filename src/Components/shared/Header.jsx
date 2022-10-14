import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../store/slices/login.slice";
import { useSelector } from "react-redux";

const Header = () => {
  const counter = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const goLogin = () => dispatch(setLogin(true));
  const goLogOff = () => dispatch(setLogin(false));

  useEffect(() => {
    const isThereToken = localStorage.getItem("token");
    if (isThereToken) {
      goLogin();
    } else {
      goLogOff();
    }
  }, [counter]);
  const getComponent = () => {
    if (!counter) {
      return (
        <li className="header_item">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "")}
            to="/store/login"
          >
            login
          </NavLink>
        </li>
      );
    }
  };

  return (
    <header className="header">
      <NavLink to="/store">
        <img className="home-img-one" src="/logow.svg" alt="" />
        <p className="t-logo">Programing-Test </p>
      </NavLink>
      <nav className="header_nav">
        <ul className="header_list">{getComponent()}</ul>
      </nav>
    </header>
  );
};

export default Header;

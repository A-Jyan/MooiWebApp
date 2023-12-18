import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { DataContext } from "../../context/DataProvider";
import "./Header.css";

export const Header = () => {
  const { cart } = useContext(DataContext);

  return (
    <header className="header__header-container">
      <Link to="/">
        <img src={Logo} alt="mooi" className="header__logo" />
      </Link>
      <div className="header__link-container">
        <Link to="/productos">Habitaciones</Link>
        <Link to="/carrito" className="header__cart-link">
          <box-icon name="cart" color={'white'} size="2.5rem" />
          {cart.length > 0 && (
            <p className="header__cart-count">{cart.length}</p>
          )}
        </Link>
      </div>
    </header>
  );
};

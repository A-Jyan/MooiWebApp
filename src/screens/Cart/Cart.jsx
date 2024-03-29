import { useContext } from "react";
import "./Cart.css";
import { DataContext } from "../../context/DataProvider";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import { Link } from "react-router-dom";

const CartScreen = () => {
  const { cart } = useContext(DataContext);
  const amount = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="cart__container">
      <h1 className="cart__title">Tus habitaciones:</h1>
      {cart.map((product) => (
        <CartItem key={product.id} id={product.id} product={product} />
      ))}
      {cart.length === 0 && (
        <p className="cart__empty-cart-message">
          Aún no hay ninguna habitacion seleccionada
        </p>
      )}
      {cart.length > 0 && (
        <div className="cart__submit-container">
          <h3 className="cart__submit-total">Total: ${amount}</h3>
          <Link to="/checkout">
            <Button text="Finalizar Compra" />
          </Link>
        </div>
      )}
    </div>
  );
};

export { CartScreen as Cart };

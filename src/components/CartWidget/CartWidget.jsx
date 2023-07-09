import cart from "./assets/cart.svg";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <div>
      <Link
        to="/cart" style={{ display: totalQuantity > 0 ? " inline" : "none" }}>
        <img src={cart} alt="cart-widget" />
        {totalQuantity}
      </Link>
    </div>
  );
};

export default CartWidget;

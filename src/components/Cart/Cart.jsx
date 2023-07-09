import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, total, clearCart, totalQuantity } = useCart();

  if (totalQuantity === 0) {
    return (
      <div className="noProducts">
        <h1>Agregue productos al carrito..</h1>
        <Link className="buttonNoProducts" to='/'>Buscar Productos</Link>
      </div>
    );
  }

  return (
    <div className="pagina">
      <h1>Resumen de compra</h1>

      {cart.map((prod) => {
        return (
          <div className="cardCompra" key={prod.id}>
            <h3>{prod.name}</h3>
            <h3>Precio: $ {prod.price}</h3>
            <h3>Cantidad: {prod.quantity}</h3>
            <h3>Subtotal: $ {prod.quantity * prod.price}</h3>
          </div>
        );
      })}

      <h1 className="totalCompra">Total de la compra: $ {total}</h1>
      <Link className="buttonCheckout" to="/checkout">
        Confirmar Compra
      </Link>
      <Link className="buttonCheckout" onClick={() => clearCart()}>
        Limpiar Carrito
      </Link>
    </div>
  );
};

export default Cart;

import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const increment = () => {
    if (count < stock) setCount((prev) => prev + 1);
  };

  return (
    <div  className="buttonAgregarAlCarrito">
      <h3>{count}</h3>
      <button className="buttonRestar" onClick={decrement}>-</button>
      <button onClick={() => onAdd(count)}>Agregar al Carrito </button>
      <button className="buttonSumar" onClick={increment}>+</button>
    </div>
  );
};

export default ItemCount;

import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import "./ItemDetail.css";
import { useCart } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, price, description, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
    console.log(quantity);
    setQuantity(quantity);

    const objProduct = {
      id,
      name,
      price,
      quantity,
    };

    addItem(objProduct);
  };

  return (
    <div className="cardDetail">
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <p>$ {price}</p>
      <p>Descripcion: {description}</p>
      {quantity == 0 ? (
        stock > 0 ? (
          <ItemCount stock={stock} onAdd={handleOnAdd} />
        ) : (
          <p>No hay stock del producto</p>
        )
      ) : (
        <button className="finalizarCompra">Finalizar Compra</button>
      )}
    </div>
  );
};

export default ItemDetail;

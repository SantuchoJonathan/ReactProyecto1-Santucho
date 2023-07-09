import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import "./ItemDetail.css";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useNotification } from "../../notification/NotificationService";

const ItemDetail = ({ id, name, img, price, description, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const { addItem } = useCart();
  const { setNotification } = useNotification();

  const handleOnAdd = (quantity) => {
    setQuantity(quantity);

    const objProduct = {
      id,
      name,
      price,
      quantity,
    };

    addItem(objProduct);
    if (id == id.card)
      setNotification(
        "success",
        `Se agrego correctamente ${quantity} ${name} al carrito`
      );
    else {
      setNotification("success", `Este producto no se puede agregar. Producto repetido`);
    }
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
        <Link to="/cart" className="finalizarCompraLink">
          Finalizar Compra
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;

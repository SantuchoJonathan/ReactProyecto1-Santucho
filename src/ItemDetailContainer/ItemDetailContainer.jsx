import { useState, useEffect } from "react";
import { getProductsById } from "../asyncMock";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  const { ItemId } = useParams();

  useEffect(() => {
    getProductsById(ItemId).then((response) => {
      setProduct(response);
    });
  }, [ItemId]);

  return (
    <div className="titlePrincipal">
      <h1>Detalle de Producto</h1>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;

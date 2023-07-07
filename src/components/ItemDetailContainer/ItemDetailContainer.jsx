import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, QuerySnapshot } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { ItemId } = useParams();

  useEffect(() => {
    const productRef = doc(db, "products", ItemId);
    getDoc(productRef).then((QuerySnapshot) => {
      const fields = QuerySnapshot.data();

      const productAdapted = {
        id: QuerySnapshot.id,
        ...fields};

      setProduct(productAdapted)});

  },[ItemId]);

  return (
    <div className="titlePrincipal">
      <h1>Detalle de Producto</h1>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;

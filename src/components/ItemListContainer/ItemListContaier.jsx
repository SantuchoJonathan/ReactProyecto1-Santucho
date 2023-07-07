import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const productsRef = !categoryId
      ? collection(db, "products")
      : query(collection(db, "products"), where("category", "==", categoryId));

    setLoading(true);

    getDocs(productsRef)
      .then((querySnapshot) => {
        const productsAdapted = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });
        setProducts(productsAdapted);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="titlePrincipal">{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

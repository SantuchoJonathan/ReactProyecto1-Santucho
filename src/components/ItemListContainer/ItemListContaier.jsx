import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const getFunction = categoryId ? getProductsByCategory : getProducts;

    getFunction(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1 className="titlePrincipal">{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

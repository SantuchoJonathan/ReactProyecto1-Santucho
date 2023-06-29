import { Link } from "react-router-dom";
import './Item.css'

const Item = ({ id, name, img, price }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>$ {price}</p>
      <Link to={`/Item/${id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;

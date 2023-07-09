import {
  collection,
  query,
  where,
  documentId,
  getDocs,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { useCart } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import { useNotification } from "../../notification/NotificationService";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Checkout.css";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { cart, total, clearCart } = useCart();

  const { setNotification } = useNotification();

  const navigate = useNavigate();

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
    const objOrder = {
      buyer: {
        name: " ",
        phone: " ",
        email: " ",
      },
      items: cart,
      total: total,
    };

    try {
      const ids = cart.map((prod) => prod.id);

      const productsRef = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );

      const { docs } = await getDocs(productsRef);

      const batch = writeBatch(db);

      const outOfStock = [];

      docs.forEach((doc) => {
        const fieldsDoc = doc.data();
        const stockDb = fieldsDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...fieldsDoc });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        const ordersRef = collection(db, "orders");

        const { id } = await addDoc(ordersRef, objOrder);

        setNotification(
          "success",
          "La orden fue generada correctamente, el id es: " + id
        );

        clearCart();

        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        setNotification("error", "hay productos que no tienen stock");
      }
    } catch (error) {
      setNotification("error", "hubo un error en la generacion de la orden");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se esta generando su orden...</h1>;
  }

  return (
    <div>
      <Form style={{ margin: "10px 30%" }}>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su Nombre y Apellido"
            name="name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTelefono">
          <Form.Label>Numero de Contacto</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese su numero de contacto"
            phone="phone"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su direccion de E-mail"
            email="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ingrese nuevamente su correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su direccion de E-mail"
            email="email"
          />
        </Form.Group>

        <button className="crearCompra" onClick={createOrder}>
          Generar ORDEN de compra
        </button>
      </Form>
    </div>
  );
};

export default Checkout;

import Menu from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContaier";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./notification/NotificationService";

function App() {
  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <Menu />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer greeting={"Listado de Productos"} />
                }
              />
              <Route
                path="/category/:categoryId"
                element={
                  <ItemListContainer
                    greeting={"Listado de Productos Filtrados"}
                  />
                }
              />
              <Route path="/Item/:ItemId" element={<ItemDetailContainer />} />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

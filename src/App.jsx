import Menu from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContaier";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { NotificationProvider } from "./notification/NotificationService";


function App() {
  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <Menu />
            <Routes>
              <Route path="/"element={<ItemListContainer greeting={"Listado de Productos"}/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Listado de Productos Filtrados:"}/>}/>
              <Route path="/Item/:ItemId" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

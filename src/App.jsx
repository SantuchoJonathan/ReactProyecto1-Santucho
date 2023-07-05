import { useState } from "react";
import Menu from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContaier";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Listado de Productos"}/>}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Listado de Productos Filtrados"} />
            }/>
          <Route path="/Item/:ItemId" element={<ItemDetailContainer setCart={setCart} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

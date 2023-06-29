import Menu from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContaier";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Listado de Productos"} />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Listado de Productos Filtrados"}/>}/>
        <Route path="/Item/:ItemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

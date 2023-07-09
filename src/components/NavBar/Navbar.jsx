import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="black">
      <Container>
        <Navbar.Brand href="/"> Pastorino Seguridad SRL </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="navbarContent">
          <Nav className="navBar">
            {/* <Nav.Link className="NavLink" href="/">
              Inicio
            </Nav.Link> */}

            <Link to={"/"}>Inicio</Link>
            <Link to={"/category/extintor"}>Extintores</Link>
            <Link to={"/category/manguera"}>Mangueras</Link>
            <Link to={"/category/gabinetes"}>Gabinetes</Link>

            {/* <NavDropdown
              className="NavLink"
              title="Productos"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/category/extintor">Extintores</NavDropdown.Item>
              <NavDropdown.Item href="/category/manguera">Mangueras</NavDropdown.Item>
              <NavDropdown.Item href="/category/gabinetes">Gabinetes</NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link className="NavLink" href="#Contacto">
              Contacto
            </Nav.Link> */}
<div className="CartWidget">
<CartWidget  />
</div>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

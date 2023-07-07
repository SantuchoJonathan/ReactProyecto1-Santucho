import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="black">
      <Container>
        <Navbar.Brand href="/"> Pastorino Seguridad SRL </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="navbarContent">
          <Nav className="me-0">
            <Nav.Link className="NavLink" href="/">
              Inicio
            </Nav.Link>

            <NavDropdown
              className="NavLink"
              title="Productos"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/category/extintor">Extintores</NavDropdown.Item>
              <NavDropdown.Item href="/category/manguera">Mangueras</NavDropdown.Item>
              <NavDropdown.Item href="/category/gabinetes">Gabinetes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="NavLink" href="#Contacto">
              Contacto
            </Nav.Link>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

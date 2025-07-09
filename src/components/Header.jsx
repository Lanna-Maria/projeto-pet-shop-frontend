import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'; // <-- 1. Importa o ícone
import { useCart } from '../context/CartContext'; // <-- 2. Importa o hook do carrinho
import './Header.css';

function Header() {
  const { cartItems } = useCart(); // <-- 3. Usa o hook para pegar os itens

  // 4. Calcula a quantidade total de itens no carrinho
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#8B4513' }} variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Pet Shop Feliz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Início
            </Nav.Link>
            <Nav.Link as={Link} to="/agendamento">
              Agendamentos
            </Nav.Link>
            <Nav.Link as={Link} to="/produtos">
              Produtos
            </Nav.Link>
            <Nav.Link as={Link} to="/serviços">
              Serviços
            </Nav.Link>
            <Nav.Link as={Link} to="/contato">
              Contato
            </Nav.Link>
            <Nav.Link as={Link} to="/sobre">
              Sobre
            </Nav.Link>
            
            {/*-- 5. Adicione o link do carrinho aqui --*/}
            <Nav.Link as={Link} to="/carrinho" className="cart-link">
              <FaShoppingCart size="1.2em" />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
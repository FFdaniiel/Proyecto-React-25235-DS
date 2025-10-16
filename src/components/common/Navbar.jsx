import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { FiShoppingBag } from 'react-icons/fi';

/**
 * To do:
 * - Agregar Form de busqueda 
 * 
 */

const Navigation = () => {
    return (
        <Navbar bg="dark" expand="lg" className=' shadow-sm p-3 mb-5 bg-body rounded '>
            <Container>
                {/* pensar un mejor nombre al futuro... */}
                <Navbar.Brand as={Link} to="/">Talento Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto ">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                        <Nav.Link as={Link} to="/sobre_nosotros">Sobre nosotros</Nav.Link>
                        <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                        <Nav.Link as={Link} to="/404">404</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                {/* Carrito */}
                <Nav.Link as={Link} to="/carrito"><FiShoppingBag size={20} /></Nav.Link>

            </Container>
        </Navbar>
    )
}

export default Navigation
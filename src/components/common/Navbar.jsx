import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Badge, Button } from 'react-bootstrap';
import { FiShoppingBag } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { AuthContext } from '../../context/AuthContext';

/**
 * To do:
 * - Agregar Form de busqueda
 *
 */

const Navigation = () => {
    const { totalItems } = useContext(CarritoContext);
    const { estaLogueado, usuario, permiso, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        toast.info('Sesión cerrada exitosamente', { autoClose: 2000 });
    };

    return (
        <Navbar bg="dark" expand="lg" className='shadow-sm p-3 mb-5 bg-body rounded'>
            <Container>
                {/* pensar un mejor nombre al futuro... */}
                <Navbar.Brand as={Link} to="/">Talento Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                        <Nav.Link as={Link} to="/sobre_nosotros">Sobre nosotros</Nav.Link>
                        <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                        {permiso === 'admin' && (
                            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                        )}
                    </Nav>

                    <Nav className="align-items-center">
                        {/* Usuario logueado */}
                        {estaLogueado ? (
                            <>
                                <span className="text-dark me-3">
                                    Hola, <strong>{usuario}</strong>
                                </span>
                                <Button
                                    variant="outline-dark"
                                    size="sm"
                                    onClick={handleLogout}
                                    className="me-3"
                                >
                                    Cerrar Sesión
                                </Button>
                            </>
                        ) : (
                            <Nav.Link as={Link} to="/login" className="text-dark me-3">
                                Iniciar Sesión
                            </Nav.Link>
                        )}

                        {/* Carrito con badge */}
                        <Nav.Link as={Link} to="/carrito" className="position-relative">
                            <FiShoppingBag size={24} className="text-dark" />
                            {totalItems() > 0 && (
                                <Badge
                                    bg="danger"
                                    pill
                                    className="position-absolute top-0 start-100 translate-middle"
                                >
                                    {totalItems()}
                                </Badge>
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
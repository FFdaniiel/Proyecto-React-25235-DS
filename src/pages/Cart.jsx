import React, { useContext } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { CarritoContext } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { carrito, agregarCarrito, decrementarCarrito, borrarItemCarrito, vaciarCarrito, totalCompra } = useContext(CarritoContext);
    const navigate = useNavigate();

    // costo de envio - ta caro
    const shippingCost = 35000;
    // Subtotal del carrito
    const subTotal = totalCompra();
    // Costo total con envio
    const totalFinal = subTotal + shippingCost;

    const mensajeCompra = () => {
        toast.success('¡Gracias por tu compra! Tu pedido ha sido procesado exitosamente.', {
            autoClose: 3000
        });
        vaciarCarrito();
        setTimeout(() => navigate('/'), 1000);
    };

    return (
        <>
            <Container className="py-5">
                <Row>
                    <Col>
                        <h1 className="mb-4">Carrito de Compras</h1>
                    </Col>
                </Row>

                {carrito.length === 0 ? (
                    <Row>
                        <Col className="text-center py-5">
                            <h3 className="text-muted">Carrito Vacío</h3>
                            <p className="text-muted mb-4">No hay productos en tu carrito</p>
                            <Button variant="primary" onClick={() => navigate('/productos')}>
                                Ir a Productos
                            </Button>
                        </Col>
                    </Row>
                ) : (
                    <Row>
                        {/* Lista de productos */}
                        <Col lg={8}>

                            {carrito.map((product) => (
                                <Card key={product.id} className="mb-3">
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col md={2} xs={4}>
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="img-fluid rounded mb-3"
                                                    style={{ height: '120px', objectFit: 'cover' }}
                                                />
                                            </Col>
                                            <Col md={4} xs={8}>
                                                <h6 className="mb-1">{product.title}</h6>
                                                <p className="text-muted mb-0">${product.price}</p>
                                            </Col>
                                            <Col md={3} xs={5}>
                                                <div className="d-flex align-items-center">
                                                    <Button
                                                        variant="outline-secondary"
                                                        size="sm"
                                                        onClick={() => decrementarCarrito(product.id)}
                                                        disabled={product.cantidad === 1}
                                                    >
                                                        <FaMinus size={10} />
                                                    </Button>
                                                    <span className="mx-3">{product.cantidad}</span>
                                                    <Button
                                                        variant="outline-secondary"
                                                        size="sm"
                                                        onClick={() => agregarCarrito(product)}
                                                    >
                                                        <FaPlus size={10} />
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col md={2} xs={5}>
                                                <h6 className="mb-0">${(product.price * product.cantidad).toFixed(2)}</h6>
                                            </Col>
                                            <Col md={1} xs={1}>
                                                <Button
                                                    variant="outline-danger"
                                                    size="sm"
                                                    onClick={() => borrarItemCarrito(product.id)}
                                                >
                                                    <FaTrash />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            ))}

                            <div className="d-flex justify-content-end mt-3 w-100 pb-3">
                                <Button
                                    variant="outline-danger"
                                    onClick={vaciarCarrito}
                                >
                                    Vaciar Carrito
                                </Button>
                            </div>
                        </Col>

                        {/* Resumen del carrito */}
                        <Col lg={4}>
                            <Card>
                                <Card.Header>
                                    <h5 className="mb-0">Resumen del Pedido</h5>
                                </Card.Header>
                                <Card.Body>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Subtotal:</span>
                                        <span>${subTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Envío:</span>
                                        <span>${shippingCost}</span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between mb-3">
                                        <strong>Total:</strong>
                                        <strong>${totalFinal.toFixed(2)}</strong>
                                    </div>
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="w-100 mb-2"
                                        onClick={mensajeCompra}
                                    >
                                        Confirmar Compra
                                    </Button>
                                    <Button
                                        variant="outline-secondary"
                                        size="lg"
                                        className="w-100"
                                        onClick={() => navigate('/productos')}
                                    >
                                        Continuar Comprando
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )}
            </Container>
        </>
    );
}

export default Cart
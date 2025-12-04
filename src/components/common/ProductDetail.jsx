import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Breadcrumb, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import confetti from 'canvas-confetti';
import { useFetch } from '../../hooks/useFetch';
import { FaChevronLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const ProductDetail = () => {
    // Obtener el ID del producto desde la URL
    const { id } = useParams();
    const { agregarCarrito } = useContext(CarritoContext);

    // Fetch del producto específico
    const { data: product, loading } = useFetch(
        `https://fakestoreapi.com/products/${id}`
    );

    // Estado de carga
    if (loading) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" variant="primary" />
                <p className="mt-3 text-muted">Cargando producto...</p>
            </Container>
        );
    }
    // confeti
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    const handleAgregarCarrito = () => {
        agregarCarrito(product);
        // confeti
        function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        fire(0.2, {
            spread: 60,
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
        // toast
        toast.success(`${product.title} agregado al carrito`, {
            position: "top-right",
            autoClose: 2000
        });
    };

    return (
        <>
            <Helmet>
                <title>{product.title} - Talento Store</title>
                <meta name="description" content={product.description} />
            </Helmet>
            <div className="bg-light min-vh-100 py-4">
                <Container>
                    {/* Breadcrumb - Navegación */}
                    <Breadcrumb className="mb-4">
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                            Inicio
                        </Breadcrumb.Item>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/productos" }}>
                            Productos
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            {product.title}
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    {/* Tarjeta principal del producto */}
                    <Row className="bg-white rounded shadow-sm overflow-hidden">

                        {/* Columna izquierda - Imagen */}
                        <Col md={6} className="p-5 bg-light">
                            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="img-fluid"
                                    style={{ maxHeight: '500px', objectFit: 'contain' }}
                                />
                            </div>
                        </Col>

                        {/* Columna derecha - Información */}
                        <Col md={6} className="p-5">

                            {/* Categoría */}
                            <span className="badge bg-secondary mb-3 text-uppercase">
                                {product.category}
                            </span>

                            {/* Título del producto */}
                            <h1 className="display-6 fw-bold mb-3">
                                {product.title}
                            </h1>

                            {/* Rating (si existe) */}
                            {product.rating && (
                                <div className="mb-3 d-flex align-items-center">
                                    {/* estrellas basado en el rating */}
                                    <div className="text-warning fs-5 me-2">
                                        {[...Array(5)].map((_, index) => {
                                            const ratingValue = index + 1;
                                            const rating = product.rating.rate;

                                            if (rating >= ratingValue) {
                                                // Estrella completa
                                                return <FaStar key={index} />;
                                            } else if (rating >= ratingValue - 0.5) {
                                                // Media estrella
                                                return <FaStarHalfAlt key={index} />;
                                            } else {
                                                // Estrella vacía
                                                return <FaRegStar key={index} />;
                                            }
                                        })}
                                    </div>
                                    <span className="text-muted">
                                        <strong>{product.rating.rate}</strong> ({product.rating.count} reseñas)
                                    </span>
                                </div>
                            )}

                            {/* Precio */}
                            <div className="mb-4">
                                <h2 className="text-success fw-bold display-4">
                                    ${product.price}
                                </h2>
                            </div>

                            {/* Descripción */}
                            <div className="mb-4">
                                <h5 className="fw-semibold mb-3">Descripción del producto</h5>
                                <p className="text-muted">
                                    {product.description}
                                </p>
                            </div>

                            {/* Separador */}
                            <hr className="my-4" />

                            {/* Botones de acción */}
                            <div className="d-grid gap-3">

                                {/* Botón Agregar al Carrito */}
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="py-3 fw-semibold"
                                    onClick={handleAgregarCarrito}
                                >
                                    🛒 Agregar al carrito
                                </Button>

                                {/* Botón Volver a productos */}
                                <Link to="/productos" className="text-decoration-none">
                                    <Button
                                        variant="outline-secondary"
                                        size="lg"
                                        className="w-100 py-2"
                                    >
                                        <FaChevronLeft className="me-2" />
                                        Volver a productos
                                    </Button>
                                </Link>
                            </div>

                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    );
};

export default ProductDetail;
import { useState } from 'react';
import { Container, Row, Col, Spinner, Button, Pagination } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import '../App.css';
import Card from '../components/common/Card';
import { useFetch } from '../hooks/useFetch';

const Products = () => {
    const { data: products, loading } = useFetch('https://fakestoreapi.com/products');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    /* TO DO:
        - Implementar filtro por categoría y search
    */

    if (loading) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" variant="primary" />
                <p className="mt-3 text-muted">Cargando...</p>
            </Container>
        );
    }

    // Calcular índices para paginación
    const indexOfLastItem = currentPage * itemsPerPage;
    const iPaginacionUltimoItem = indexOfLastItem - itemsPerPage;
    const currentProducts = products.slice(iPaginacionUltimoItem, indexOfLastItem);

    // Calcular número total de páginas
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Función para cambiar de página
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Container className="py-5">
                <Row className="mb-4">
                    <Col>
                        <h1 className="display-4 fw-bold">Todos los Productos</h1>
                        <p className="text-muted">
                            Mostrando {iPaginacionUltimoItem + 1} - {Math.min(iPaginacionUltimoItem, products.length)} de {products.length} productos
                        </p>
                    </Col>
                </Row>

                {/* Lista de productos */}
                <Row xs={1} sm={2} md={3} lg={4} className="g-4 mb-4">
                    {currentProducts.map(product => (
                        <Col key={product.id}>
                            <Card
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price}
                                category={product.category}
                                description={product.description}
                            />
                        </Col>
                    ))}
                </Row>

                {/* paginación */}
                {totalPages > 1 && (
                    <Row>
                        <Col className="d-flex justify-content-center align-items-center gap-3 ">
                            <Button
                                variant="outline-success"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Anterior
                            </Button>

                            <Pagination className="mb-0 ">
                                {[...Array(totalPages)].map((_, index) => (
                                    <Pagination.Item
                                        key={index + 1}
                                        active={index + 1 === currentPage}
                                        className="btn-paginacion"
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </Pagination.Item >
                                ))}
                            </Pagination>

                            <Button
                                variant="outline-success"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Siguiente
                            </Button>
                        </Col>
                    </Row>
                )}
            </Container>
        </>
    );
};

export default Products;
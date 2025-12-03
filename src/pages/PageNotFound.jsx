import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PageNotFound = () => {
    return (
        <Container className="text-center py-5" >
            <Row className="justify-content-center align-items-center">
                <Col md={8} lg={6}>

                    <h1 className="display-1 fw-bold text-primary mb-4">
                        404
                    </h1>

                    <h2 className="mb-3">Página no encontrada</h2>
                    <p className="text-muted mb-4">
                        Lo sentimos, la página que buscas no existe.
                    </p>

                    <Link to="/">
                        <Button variant="primary" size="lg">
                            Volver al inicio
                        </Button>
                    </Link>

                    <div className="mt-4 pt-4 border-top">
                        <p className="text-muted mb-3">También puedes visitar:</p>
                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                            <Link to="/productos" className="text-decoration-none">
                                Productos
                            </Link>
                            <Link to="/sobre_nosotros" className="text-decoration-none">
                                Sobre Nosotros
                            </Link>
                            <Link to="/contacto" className="text-decoration-none">
                                Contacto
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PageNotFound;
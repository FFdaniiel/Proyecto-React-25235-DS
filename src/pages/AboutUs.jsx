import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRocket, FaSmileWink, FaDrum } from 'react-icons/fa';

// To do :
//  Agregar  TeamSection con randomuser / add TeamSection with randomuser

const AboutUs = () => {
    return (
        <Container className="py-5">
            {/* Header */}
            <Row className="mb-5">
                <Col>
                    <h1 className="display-4 fw-bold text-center mb-3">Sobre Nosotros</h1>
                    <p className="lead text-center text-muted">
                        Conoce más sobre nuestra historia y misión
                    </p>
                </Col>
            </Row>

            {/* Nuestra Historia */}
            <Row className="mb-5">
                <Col lg={6} className="mb-4 mb-lg-0">
                    <img
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                        alt="Nuestra tienda"
                        className="img-fluid rounded"
                    />
                </Col>
                <Col lg={6}>
                    <h2 className="fw-bold mb-3">Nuestra Historia</h2>
                    <p className="text-muted">
                        Fundada en 2025, TalentReact nació con la visión de revolucionar
                        la experiencia de compra en línea, podes creerlo?.
                        Comenzamos como un pequeño
                        proyecto y hemos crecido hasta convertirnos en una plataforma
                        confiable para miles de clientes.
                    </p>

                </Col>
            </Row>

            {/* Nuestra Misión */}
            <Row className="mb-5">
                <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                        alt="Nuestro equipo"
                        className="img-fluid rounded"
                    />
                </Col>
                <Col lg={6} className="order-lg-1">
                    <h2 className="fw-bold mb-3">Nuestra Misión</h2>
                    <p className="text-muted">
                        Facilitar el acceso a productos de calidad mediante una plataforma
                        moderna, segura y fácil de usar. Queremos ser el destino preferido
                        para las compras en línea de nuestros clientes.
                    </p>
                    <p className="text-muted">
                        Nos esforzamos por mantener los más altos estándares de calidad
                        en cada aspecto de nuestro negocio.
                    </p>
                </Col>
            </Row>
            {/* Valores */}
            <Row className="text-center">
                <Col xs={12} className="mb-4">
                    <h2 className="fw-bold">Nuestros Valores</h2>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="p-3">
                        <FaRocket size={25} />
                        <h4 className="fw-semibold mb-3">Calidad</h4>
                        <p className="text-muted">
                            Productos cuidadosamente seleccionados para garantizar
                            la mejor experiencia.
                        </p>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="p-3">
                        <FaSmileWink size={25} />
                        <h4 className="fw-semibold mb-3">Confianza</h4>
                        <p className="text-muted">
                            Transparencia y honestidad en cada interacción con
                            nuestros clientes.
                        </p>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div className="p-3">
                        <FaDrum size={25} />
                        <h4 className="fw-semibold mb-3">Innovación</h4>
                        <p className="text-muted">
                            Constantemente mejorando para ofrecer la mejor
                            experiencia digital.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;
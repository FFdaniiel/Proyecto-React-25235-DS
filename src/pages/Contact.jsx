import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from '@formspree/react';

const Contact = () => {

    const [state, handleSubmit] = useForm("xovebwqr");
    if (state.succeeded) {
        return <p>Muchas Gracias!</p>;
    }

    return (
        <>
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <h2 className="text-center mb-4">Contacto</h2>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    placeholder="Tu nombre"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="tu@email.com"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    name="mensaje"
                                    placeholder="Escribe tu mensaje aquí..."
                                    required
                                />
                            </Form.Group>

                            <div className="d-grid">
                                <Button type="submit" variant="primary" size="lg" disabled={state.submitting}>
                                    Enviar
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Contact;

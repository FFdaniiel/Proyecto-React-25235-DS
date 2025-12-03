import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (usuario === 'admin' && contrasena === 'admin123') {
            login('admin', 'admin');
            toast.success('Bienvenido Administrador', { autoClose: 2000 });
            setTimeout(() => navigate('/admin'), 500);
        } else if (usuario === 'usuario' && contrasena === 'usuario123') {
            login('usuario', 'user');
            toast.success('Bienvenido Usuario', { autoClose: 2000 });
            setTimeout(() => navigate('/productos'), 500);
        } else {
            toast.error('Clave/usuario incorrecto.', {
                autoClose: 4000
            });
        }
    };

    return (
        <>
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={6} lg={5}>
                        <Card className="shadow">
                            <Card.Body className="p-5">
                                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formUsuario">
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingresa tu usuario"
                                            value={usuario}
                                            onChange={(e) => setUsuario(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="formContrasena">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Ingresa tu contraseña"
                                            value={contrasena}
                                            onChange={(e) => setContrasena(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="w-100 mb-3">
                                        Ingresar
                                    </Button>

                                    <div className="text-center text-muted small">
                                        <p className="mb-1">Cuentas de prueba:</p>
                                        <p className="mb-0"><strong>Admin:</strong> admin / admin123</p>
                                        <p className="mb-0"><strong>Usuario:</strong> usuario / usuario123</p>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;

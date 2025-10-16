import Card from '../common/Card';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Container, Row, Col, Spinner } from 'react-bootstrap'

const PopularCategories = () => {
    const navigate = useNavigate();
    const { data, loading } = useFetch('https://fakestoreapi.com/products/categories');

    if (loading) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" variant="primary" />
                <p className="mt-3 text-muted">Cargando categorías...</p>
            </Container>
        );
    }
    // Maximo de categorias a mostrar
    const topCategories = data.slice(0, 4) || [];

    return (
        <section className="py-5">
            <Container>
                <h2 className="fw-semibold mb-4">Categorías populares</h2>
                <Row xs={1} sm={2} lg={4} className="g-4">
                    {topCategories.map((category, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <Card
                                title={category}
                                description={`Explora la categoría ${category.toLowerCase()}`}
                                image={`https://picsum.photos/400/400?random=${index}`}
                                buttonText="Explorar"
                                onButtonClick={() => navigate('/productos')}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default PopularCategories;
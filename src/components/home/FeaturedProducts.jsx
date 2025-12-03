import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Card from '../common/Card';
import { useFetch } from '../../hooks/useFetch';

const FeaturedProducts = () => {
    const { data, loading } = useFetch('https://fakestoreapi.com/products?limit=4');
    if (loading) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" variant="primary" />
                <p className="mt-3 text-muted">Cargando productos...</p>
            </Container>
        );
    }

    return (
        <section className="py-5">
            <Container>
                <h2>Productos destacados</h2>
                <Row xs={1} sm={2} md={2} lg={4} className="g-4">
                    {data.map(product => (
                        <Col key={product.id}>
                            <Card
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price}
                                category={product.category}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default FeaturedProducts;
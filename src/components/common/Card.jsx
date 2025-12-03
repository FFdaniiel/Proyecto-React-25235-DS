import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CarritoContext } from '../../context/CarritoContext';

const CardComponent = ({ id, title, image, price, category, description, onButtonClick, buttonText = 'Ver más', addToCart = false, product }) => {
    const navigate = useNavigate();
    const { agregarCarrito } = useContext(CarritoContext);

    // esto sirve para que si se pasa un onButtonClick, se ejecute, o si no se pasa, se redirija a la pagina del producto
    const handleClick = () => {
        if (onButtonClick) {
            onButtonClick();
        } else if (addToCart && product) {
            agregarCarrito(product);
            toast.success(`${title} agregado al carrito`, { autoClose: 2000 });
        } else if (id) {
            navigate(`/productos/${id}`);
        }
    };

    return (
        <Card className='h-100 shadow-sm'>
            <Card.Img
                variant="top"
                src={image}
                alt={title}
                height={320}
                className='card-img-top'
            />
            <Card.Body className='d-flex flex-column'>
                {category && (
                    <span className="badge bg-dark mb-2">{category}</span>
                )}
                <Card.Title>{title}</Card.Title>
                { description && (
                    <Card.Text className='text-muted small flex-grow-1'>
                        {description.length > 60 ? description.slice(0, 60) + '...' : description}
                    </Card.Text>
                )}
                {price && (
                    <h5 className="mb-3 mt-auto text-success">${price}</h5>
                )}
                <Button variant="primary" className='mt-auto btn-success' onClick={handleClick}>
                    {buttonText}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;

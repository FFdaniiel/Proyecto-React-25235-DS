import React from 'react'
import { Container } from 'react-bootstrap'

const Cart = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
            <div className="text-center">
                <h1>Carrito de Compras</h1>
                <p className="text-muted">Tu carrito está vacío</p>
            </div>
        </Container>
    )
}

export default Cart
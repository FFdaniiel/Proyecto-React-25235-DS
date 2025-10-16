import React from 'react'
import { Container } from 'react-bootstrap'

const Products = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
            <div className="text-center">
                <h1>Productos</h1>
                <p className="text-muted">Próximamente</p>
            </div>
        </Container>
    )
}

export default Products
import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="bg-dark text-white ">
            <Container className='d-flex justify-content-between align-items-center py-3'>
                <p>&copy; 2025 Talento Store. Todos los derechos reservados.</p>
                <div>
                    <a href="https://facebook.com" className="text-white me-3">
                        <FaFacebook size={20} />
                    </a>
                    <a href="https://twitter.com" className="text-white me-3">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://instagram.com" className="text-white ">
                        <FaInstagram size={20} />
                    </a>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
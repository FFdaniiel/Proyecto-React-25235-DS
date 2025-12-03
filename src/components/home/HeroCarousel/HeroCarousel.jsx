import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './HeroCarousel.css';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1400&h=600&fit=crop",
      title: "Descubre las Últimas Tendencias",
      description: "Explora nuestra colección seleccionada de moda, electrónica y artículos para el hogar. Encuentra todo lo que necesitas para elevar tu estilo y espacio de vida.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&h=600&fit=crop",
      title: "Colección Nueva Temporada",
      description: "Descubre nuestros últimos productos y renueva tu guardarropa. Encuentra las piezas perfectas que reflejan tu estilo único.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400&h=600&fit=crop",
      title: "Ofertas Especiales",
      description: "Obtén hasta 50% de descuento en artículos seleccionados esta semana. No te pierdas estas increíbles ofertas. ¡Tiempo limitado!",
    }
  ];

  return (
    <Container fluid className="px-3 px-md-4 py-3">
      <Carousel
        fade
        interval={5000}
        className="hero-carousel rounded-3 overflow-hidden shadow-lg"
        prevIcon={<MdNavigateBefore />}
        nextIcon={<MdNavigateNext />}
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id} className="hero-item">
            <div className="position-relative">
              <img
                className="d-block w-100"
                src={slide.image}
                alt={slide.title}
                style={{
                  height: '500px',
                  objectFit: 'cover',
                  filter: 'brightness(0.7)'
                }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
            </div>

            <Carousel.Caption className="text-start top-50 start-0 translate-middle-y ms-4 ms-md-5 w-auto">
              <div style={{ maxWidth: '600px' }}>
                <h1 className="display-3 fw-bold text-white mb-3">
                  {slide.title}
                </h1>
                <p className="fs-5 text-white mb-4 d-none d-md-block">
                  {slide.description}
                </p>
                <p className="fs-6 text-white mb-4 d-md-none">
                  {slide.description.slice(0, 100)}...
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container >
  );
};

export default HeroCarousel;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, } from 'react-bootstrap';
import HeroCarousel from '../components/home/HeroCarousel/HeroCarousel';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PopularCategories from '../components/home/PopularCategories';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Talento Store</title>
                <meta name="description" content="Bienvenido a Talento Store " />
            </Helmet>
            <Container className='text-center'>
                <HeroCarousel />
                <FeaturedProducts />
                <PopularCategories />
            </Container>
        </>
    )
}

export default Home
import React from 'react';
import { Container, } from 'react-bootstrap';
import HeroCarousel from '../components/home/HeroCarousel/HeroCarousel';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PopularCategories from '../components/home/PopularCategories';

const Home = () => {
    return (
        <Container className='text-center'>
            <HeroCarousel />
            <FeaturedProducts />
            <PopularCategories />
        </Container>
    )
}

export default Home
import { } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.jsx';
import './App.css'
import Navigation from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Productos from './pages/Products.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Contact from './pages/Contatc.jsx';
import Cart from './pages/Cart.jsx';


function App() {

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        {/* Header y Navegación */}
        <Navigation />

        {/* Contenido principal */}
        <main className="flex-grow-1">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/sobre_nosotros' element={<AboutUs />} />
            <Route path='/contacto' element={<Contact />} />

            {/* Rutas dinámicas */}
            <Route path='/productos/:id' element='modal del producto' />
            <Route path='/carrito' element={<Cart />} />

            {/* 404 */}
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </main>

        {/* Footer siempre en la parte inferior */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

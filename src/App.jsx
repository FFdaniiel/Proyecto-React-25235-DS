import { } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home.jsx';
import './App.css'
import Navigation from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import ProductDetail from './components/common/ProductDetail.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Productos from './pages/Products.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Admin from './pages/Admin.jsx';
import RutaProtegida from './components/RutaProtegida.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { CarritoProvider } from './context/CarritoContext.jsx';


function App() {

  return (
    <HelmetProvider>
      <AuthProvider>
        <CarritoProvider>
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
                  <Route path='/productos/:id' element={<ProductDetail />} />

                  {/* Ruta de login */}
                  <Route path='/login' element={<Login />} />

                  {/* Rutas protegidas */}
                  <Route
                    path='/carrito'
                    element={
                      <RutaProtegida soloUser={true}>
                        <Cart />
                      </RutaProtegida>
                    }
                  />
                  <Route
                    path='/admin'
                    element={
                      <RutaProtegida soloAdmin={true}>
                        <Admin />
                      </RutaProtegida>
                    }
                  />

                  {/* 404 */}
                  <Route path='/*' element={<PageNotFound />} />
                </Routes>
              </main>

              {/* Footer siempre en la parte inferior */}
              <Footer />
            </div>

            {/* Toast Container para notificaciones */}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </BrowserRouter>
        </CarritoProvider>
      </AuthProvider>
    </HelmetProvider>
  )
}

export default App

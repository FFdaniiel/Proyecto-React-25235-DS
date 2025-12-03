import { Navigate } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const RutaProtegida = ({ children, soloAdmin = false, soloUser = false }) => {
    const { estaLogueado, permiso } = useContext(AuthContext);

    // alerta de acceso denegado con sweetalert2
    const mostrarAlerta = (mensaje) => {
        Swal.fire({
            title: 'Acceso Denegado',
            text: mensaje,
            icon: 'warning',
            confirmButtonText: 'Entendido',
            customClass: {
                confirmButton: 'btn btn-dark',
                popup: 'rounded-3 shadow'
            },
            buttonsStyling: false
        });
    };

    // Si no está logueado, redirigir a login
    if (!estaLogueado) {
        mostrarAlerta("Debes estar logueado para acceder a esta página");
        return <Navigate to="/login" />;
    }

    // Si la ruta es solo para admin y el usuario no es admin
    if (soloAdmin && permiso !== "admin") {
        mostrarAlerta("Debes estar logueado como administrador para acceder");
        return <Navigate to="/productos" />;
    }

    // Si la ruta es solo para usuario y el permiso no es user
    if (soloUser && permiso !== "user") {
        mostrarAlerta("Debes estar logueado como usuario para acceder");
        return <Navigate to="/admin" />;
    }

    // Si pasa todas las validaciones, mostrar el contenido
    return children;
}

export default RutaProtegida
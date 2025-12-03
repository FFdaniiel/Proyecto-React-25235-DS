import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [permiso, setPermiso] = useState(null);

  // Estado derivado para saber si el usuario está logueado
  const estaLogueado = usuario !== null;

  // Función para hacer login
  const login = (nombreUsuario, nivelPermiso) => {
    // Crear un token simulado
    const token = `token-${nombreUsuario}-${Date.now()}`;

    // Guardar el token en localStorage
    localStorage.setItem("authToken", token);

    // Actualizar el estado
    setUsuario(nombreUsuario);
    setPermiso(nivelPermiso);
  };

  // Función para hacer logout
  const logout = () => {
    // Eliminar el token del localStorage
    localStorage.removeItem("authToken");

    // Limpiar el estado
    setUsuario(null);
    setPermiso(null);
  };

  const valor = {
    usuario,
    permiso,
    estaLogueado,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valor}>
      {children}
    </AuthContext.Provider>
  );
};

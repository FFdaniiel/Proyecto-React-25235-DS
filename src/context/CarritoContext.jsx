import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  // Inicializar carrito desde localStorage si existe
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // Función para agregar productos al carrito o incrementar cantidad si ya existe
  const agregarCarrito = (producto) => {
    const productoExiste = carrito.find((item) => item.id === producto.id);

    if (productoExiste) {
      // Si el producto ya existe, incrementar la cantidad
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      // Si no existe, agregarlo con cantidad 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // Función para decrementar la cantidad de un producto
  const decrementarCarrito = (id) => {
    const producto = carrito.find((item) => item.id === id);

    if (producto && producto.cantidad > 1) {
      setCarrito(
        carrito.map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
      );
    }
    // Si la cantidad es 1, no hace nada (no elimina el producto)
  };

  // Función para eliminar un producto del carrito
  const borrarItemCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  // Función para vaciar todo el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Función para calcular el total de la compra
  const totalCompra = () => {
    return carrito.reduce((total, item) => total + item.price * item.cantidad, 0);
  };

  // Función para calcular el total de items en el carrito
  const totalItems = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  const valor = {
    carrito,
    agregarCarrito,
    decrementarCarrito,
    borrarItemCarrito,
    vaciarCarrito,
    totalCompra,
    totalItems,
  };

  return (
    <CarritoContext.Provider value={valor}>
      {children}
    </CarritoContext.Provider>
  );
};

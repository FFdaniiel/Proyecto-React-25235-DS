import { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

const CrudProductos = () => {
    const [productos, setProductos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editId, setEditId] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        category: '',
        description: '',
        image: ''
    });

    const API_URL = 'https://fakestoreapi.com/products';

    // Obtener productos
    const getProductos = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            console.error('Error al obtener productos:', error);
        }
    };

    useEffect(() => {
        getProductos();
    }, []);

    // Abrir modal para crear
    const handleCreate = () => {
        setEditId(null);
        setFormData({
            title: '',
            price: '',
            category: '',
            description: '',
            image: ''
        });
        setShowModal(true);
    };

    // Abrir modal para editar
    const handleEdit = (producto) => {
        setEditId(producto.id);
        setFormData({
            title: producto.title,
            price: producto.price,
            category: producto.category,
            description: producto.description,
            image: producto.image
        });
        setShowModal(true);
    };

    // Eliminar producto
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará el producto',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            customClass: {
                confirmButton: 'btn btn-danger',
                cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
        });

        if (result.isConfirmed) {
            try {
                await fetch(`${API_URL}/${id}`, {
                    method: 'DELETE'
                });
                getProductos();
                Swal.fire({
                    title: '¡Eliminado!',
                    text: 'Producto eliminado exitosamente',
                    icon: 'success',
                    confirmButtonText: 'Entendido',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    },
                    buttonsStyling: false
                });
            } catch (error) {
                console.error('Error al eliminar:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Error al eliminar el producto',
                    icon: 'error',
                    confirmButtonText: 'Entendido',
                    customClass: {
                        confirmButton: 'btn btn-danger'
                    },
                    buttonsStyling: false
                });
            }
        }
    };

    // Guardar (crear o actualizar)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const productData = {
            ...formData,
            price: parseFloat(formData.price),
        };

        try {
            if (editId) {
                await fetch(`${API_URL}/${editId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(productData),
                });
                Swal.fire({
                    title: '¡Actualizado!',
                    text: 'Producto actualizado exitosamente',
                    icon: 'success',
                    confirmButtonText: 'Entendido',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    },
                    buttonsStyling: false
                });
            } else {
                await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(productData),
                });
                Swal.fire({
                    title: '¡Creado!',
                    text: 'Producto creado exitosamente',
                    icon: 'success',
                    confirmButtonText: 'Entendido',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    },
                    buttonsStyling: false
                });
            }

            setShowModal(false);
            getProductos();
        } catch (error) {
            console.error('Error al guardar:', error);
            Swal.fire({
                title: 'Error',
                text: 'Error al guardar el producto',
                icon: 'error',
                confirmButtonText: 'Entendido',
                customClass: {
                    confirmButton: 'btn btn-danger'
                },
                buttonsStyling: false
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'price' ? value.replace(/[^0-9.]/g, '') : value,
        }));
    };

    return (
        <Container className="py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Administración de Productos</h1>
                <Button variant="success" onClick={handleCreate}>
                    Agregar Producto
                </Button>
            </div>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imagen</th>
                        <th>Título</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>
                                <img
                                    src={producto.image}
                                    alt={producto.title}
                                    style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                />
                            </td>
                            <td>{producto.title}</td>
                            <td>${producto.price}</td>
                            <td>{producto.category}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => handleEdit(producto)}
                                >
                                    Editar
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(producto.id)}
                                >
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal para crear/editar */}
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        {editId ? 'Editar Producto' : 'Agregar Producto'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                step="0.01"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Categoría</Form.Label>
                            <Form.Control
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>URL de Imagen</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <div className="d-flex justify-content-end gap-2">
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Cancelar
                            </Button>
                            <Button variant="primary" type="submit">
                                {editId ? 'Actualizar' : 'Crear'}
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default CrudProductos;

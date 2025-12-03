import { Helmet } from 'react-helmet-async';
import CrudProductos from '../components/common/CrudProductos';

const Admin = () => {
    return (
        <>
            <Helmet>
                <title>Administración</title>
                <meta name="description" content="Panel de administración de productos" />
            </Helmet>
            <CrudProductos />
        </>
    );
};

export default Admin;

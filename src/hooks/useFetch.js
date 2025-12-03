import { useState, useEffect } from 'react';

// vamos a usar esto para reutilizarlo por que esto se repite mucho

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error al cargar datos:', error))
            .finally(() => setLoading(false));

    }, [url]);

    return { data, loading };
};
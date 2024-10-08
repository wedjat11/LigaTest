import { useEffect, useState } from "react";

export function useFetchImg() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // Flag para asegurarse de que la petición no se cancele
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/football', { signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                if (isMounted) setData(data); // Solo actualiza si está montado
            } catch (error) {
                if (isMounted) setError(error);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false; // Desmonta el componente para evitar actualizaciones después de desmontar
            controller.abort(); // Cancela la solicitud si se desmonta el componente
        };
    }, []);

    return { data, loading, error };
}

import { useEffect, useState } from "react";

export function useFetchImg() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setLoading(true);
            try {
                // Asegúrate de que la ruta sea correcta y accesible desde el frontend
                const response = await fetch('/api/football', { signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            controller.abort();
            console.log("Request cancelled");
        };
    }, []);

    return { data, loading, error };
}

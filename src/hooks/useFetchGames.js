import { useEffect, useState } from "react";

export function useFetchGames(leagueId, seasonId, fromDate, toDate) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // Flag para evitar actualizar el estado si el componente se desmonta
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/games', { signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                if (isMounted) setData(data); // Solo actualiza si está montado
            } catch (error) {
                if (error.name !== 'AbortError' && isMounted) {
                    setError(error);
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false; // Evita actualizaciones si el componente se desmonta
            controller.abort(); // Cancela la solicitud si el componente se desmonta
        };
    }, [fromDate, leagueId, seasonId, toDate]);

    return { data, loading, error };
}

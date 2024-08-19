import { BasicCard } from '@/components/cards/basicCard';
import { BasicLoader } from '@/components/loader/basicLoader';
import { useFetchGames } from '@/hooks/useFetchGames';
import React from 'react';

export function GroupGames() {
    const { data, loading, error } = useFetchGames();

    return (
        <>
            <div className='w-full flex flex-row gap-3'>
                {loading ? (
                    <BasicLoader/>
                ) : data && data.length > 0 ? (
                    data.slice(0, 4).map((game) => {
                        const local = game.participants[0].short_code || game.participants[0].name;
                        const visitante = game.participants[1].short_code || game.participants[1].name;
                        return (
                            <div key={game.id} className='w-1/2 flex'>
                                <BasicCard
                                    local={local}
                                    visitante={visitante}
                                    date={game.starting_at}
                                    localImg={game.participants[0].image_path}
                                    visImg={game.participants[1].image_path}
                                />
                            </div>
                        );
                    })
                ) : (
                    <div>Error: {error}</div> // Aquí muestra el mensaje si no hay datos
                )}
            </div>
        </>
    );
}

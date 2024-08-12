"use client";
import { useFetchImg } from "@/hooks/useFetchImg";
import Image from "next/image";
import React from "react";

function MyComponent() {
    const { data, loading, error } = useFetchImg();

    if (loading) return <div>Loading...</div>;
   // if (error) return <div>Error: {error.message}</div>;

    // Verificar los datos con console.log
    console.log('Fetched Data:', data);
    console.log("testing")

    return (
        <div>
            <h1 className="text-center text-2xl font-bold mb-4">Leagues</h1>
            <div className="flex overflow-x-auto space-x-1 p-4">
                {data && data.data && data.data.length > 0 ? (
                    data.data.map((league) => (
                        <div key={league.id} className="flex-shrink-0 w-16 h-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                            <Image
                                src={league.image_path}
                                alt={league.name}
                                width={30} // Ajusta el tamaño según lo necesites
                                height={30} // Ajusta el tamaño según lo necesites
                                className="object-cover"
                            />
                        </div>
                    ))
                ) : (
                    <div>No data available</div>
                )}
            </div>
        </div>
    );
}

export default MyComponent;

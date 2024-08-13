import { useFetchImg } from "@/hooks/useFetchImg";
import Image from "next/image";
import React from "react";

function TeamList() {
    const { data, loading, error } = useFetchImg();

    if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    console.log('Fetched Data:', data);
    console.log("testing");

    return (
        <div className="p-2">
            <div className="flex flex-wrap justify-between items-center">
                {data && data.data && data.data.length > 0 ? (
                    data.data.map((league) => (
                        <div key={league.id} className="flex-shrink-0  h-12 md:w-12 md:h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                            <Image
                                src={league.image_path}
                                alt={league.name}
                                width={20} // Ajusta el tamaño según lo necesites
                                height={20} // Ajusta el tamaño según lo necesites
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

export default TeamList;

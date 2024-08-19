import Image from 'next/image';

export function BasicCard({ date, local, visitante, localImg, visImg }) {
    return (
        <div className="border border-grayBorder m-2 w-full  ">
            <div className="bg-superGray">
                <p className="font-bold p-2">{date}</p>
            </div>
            <div className="flex">
                <div className=" flex items-center justify-between p-2 w-3/5 ">
                    <div className="flex items-center w-1/2 justify-between">
                    <p>{local}</p>
                        <Image
                            src={localImg}
                            alt={`${local} logo`}
                            width={20} // Tamaño ajustado para la imagen
                            height={20} // Tamaño ajustado para la imagen
                            className="mr-2"
                        />
                    </div>
                    <p>vs</p>
                    <div className="flex items-center w-1/2 justify-between pr-2">
                        <Image
                            src={visImg}
                            alt={`${visitante} logo`}
                            width={20} // Tamaño ajustado para la imagen
                            height={20} // Tamaño ajustado para la imagen
                            className="ml-2"
                        />
                        <p>{visitante}</p>
                    </div>
                </div>   
                <div className="w-2/5 border-l-2 border-grayBorder p-3 "> 
                        <ul>
                            <li>compare</li>
                            <li>previous</li>
                            <li>tv</li>
                            <li>bets</li>
                        </ul>
                </div> 
            </div>
        </div>
    );
}

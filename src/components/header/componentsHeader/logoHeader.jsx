import React from 'react';
import Image from 'next/image';
import Eye from '../../../assets/img/logo.png';  // Importa la imagen directamente

export default function LogoHeader() {
    return (
        <div className='flex items-center justify-center border-solid border border-grayBorder'>
            <Image 
                className='object-contain'
                src={Eye} 
                alt="Logo"
                width={100} // Ajusta el ancho según tus necesidades
                height={100} // Ajusta la altura según tus necesidades
            />
        </div>
    );
}

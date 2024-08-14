import React from 'react';

export function FirstRightNavBar(){
    return(
        <>
            <div className='bg-superGray w-full'>
                <ul className='flex flex-row justify-between p-3 '>
                    <li className='list-none'>MI LIGA store</li>
                    <li className='list-none'>MI LIGA grupos</li>
                    <li className='list-none'>Opciones</li>
                </ul>
            </div>
            <div className='w-full'>
                <ul className='flex flex-row justify-between p-3 '>
                    <li className='list-none'>Videos</li>
                    <li className='list-none'>Noticias</li>
                    <li className='list-none'>Estadisticas</li>
                    <li className='list-none'>Fotos</li>

                </ul>
            </div>
        </>
        
        
    )
}
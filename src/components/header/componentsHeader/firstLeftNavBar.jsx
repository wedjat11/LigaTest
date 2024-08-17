import React from 'react';

export function FirstLeftNavBar(){
    return(
        <>
            <div className='bg-superGray w-full '>
                <ul className='flex flex-row justify-between p-3 '>
                    <li className='list-none'>MI LIGA</li>
                    <li className='list-none'>MI LIGA online</li>
                    <li className='list-none'>Donde ver MI LIGA</li>
                </ul>
            </div>
            <div className='w-full'>
                <ul className='flex flex-row justify-between p-3 '>
                    <li className='list-none'>MI LIGA 1</li>
                    <li className='list-none'>MI LIGA 2</li>
                    <li className='list-none'>MI LIGA femenil</li>
                    <li className='list-none'>MI LIGA 3</li>

                </ul>
            </div>
        </>
        
        
    )
}
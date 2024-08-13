import React from 'react';

export function FirstLeftNavBar(){
    return(
        <>
            <div className='bg-superGray w-2/5'>
                <ul className='flex flex-row justify-between p-3 '>
                    <li className='list-none'>test1</li>
                    <li className='list-none'>test2</li>
                    <li className='list-none'>test3</li>
                </ul>
            </div>
            <div className='w-2/5'>
                <ul className='flex flex-row justify-between p-3 '>
                    <li className='list-none'>test1</li>
                    <li className='list-none'>test2</li>
                    <li className='list-none'>test3</li>
                </ul>
            </div>
        </>
        
        
    )
}
import React from 'react'

export function BasicButton ({title, onClick}) {

    return (
        <div className="px-3">
            <button onClick={onClick} className="rounded-full w-50 border border-black "> 
                <h3 className='text-l px-7 py-2'>{title}</h3>
            </button>
        </div>
    )
}
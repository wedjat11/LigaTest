'use client'
import React from 'react'
import { ButtonGroup } from './components/buttonGroup'
import { GroupGames } from './components/groupGames';

export function HomeView (){
    function handleClick(title) {
        console.log(`Botón apretado: ${title}`);
      }
    return (
      <>
      <div className="w-full flex justify-between pt-10 px-20 justify-items-center "> 
        <h1 className="text-3xl font-bold "> Siguientes Juegos</h1>
        <div className='flex'>
          <ButtonGroup
          t1={"botn numero 1"}
          t2={"btn numero 2"}
          t3={"btn num 3"}
          handleClick={handleClick}
          />
        </div>
      </div>
      <div className='flex justify-items-center justify-between pt-5 px-20'>
       <GroupGames/>
      </div>
      
      </>
       
    )
}
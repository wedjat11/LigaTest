'use client'
import { BasicButton } from "@/components/button/basicButton";

export function ButtonGroup({t1,t2,t3, handleClick}){
   

    return(
        <div className="flex justify-between">
            <BasicButton
            title={t1}
            onClick={() => handleClick(t1)}/>
            <BasicButton
            title={t2}
            onClick={() => handleClick(t2)}/>
            <BasicButton
            title={t3}
            onClick={() => handleClick(t3)}/>

        </div>
       
    )

    
}
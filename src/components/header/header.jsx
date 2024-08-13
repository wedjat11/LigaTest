"use client";
import React from "react";
import TeamList from "./componentsHeader/teamlist";
import { FirstLeftNavBar } from "./componentsHeader/firstLeftNavBar";
import { RightNavBar } from "./componentsHeader/rightNavBar";

function HeaderLiga() {
    return (
        <>
        <TeamList/>
        <div className="grid grid-cols-3 gap-4">
            <FirstLeftNavBar/>
            <RightNavBar/>
        </div>
        
        </>
        
    );
}

export default HeaderLiga;

"use client";
import React from "react";
import TeamList from "./componentsHeader/teamlist";
import { FirstLeftNavBar } from "./componentsHeader/firstLeftNavBar";
import LogoHeader from "./componentsHeader/logoHeader";
import { FirstRightNavBar } from "./componentsHeader/firstRightNavBar";


function HeaderLiga() {
    return (
        <>
        <TeamList/>
        <div id="container-header" className="grid grid-cols-11  w-full">
            <div className="col-span-5 border-solid border border-grayBorder" id="leftSide">
                <div >
                    <FirstLeftNavBar/>    
                </div>
            </div>
            <div >
                <LogoHeader/>
            </div>
            <div className='col-span-5 border-solid border border-grayBorder' id="rightSide">
                <div >
                    <FirstRightNavBar/>    
                </div>
            </div>
        </div>
        </>
        
    );
}

export default HeaderLiga;

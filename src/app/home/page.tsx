"use client"
import React from 'react';
export default function Home() {
    return (
        <div className = 'col-start col-span-3 row-start row-span-3'>
            <img src={"/skatebkgHome.jpg"} className='object-cover absolute z-1 bkg'/>
            <div className='w-full h-screen z-2'>
                <p className= "pt-24 title">SKATEBEATZ</p>
                <p className = "heading">Rolling with Spotify</p>
                <div className='mx-auto w-[30vw]' onClick={()=>{alert("clicked")}}>
                    <img src="/board.png" className='w-full'/>
                </div>
                 
            </div>
        </div>
    )
    
}
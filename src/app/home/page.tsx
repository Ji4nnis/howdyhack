"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    return (
        <div className='col-start col-span-3 row-start row-span-3 relative'>
            <img src={"/skatebkgHome.jpg"} className='object-cover absolute z-0 bkg'/>
            <div className='w-full h-screen z-10'>
                <p className="pt-24 title">SKATEBEATZ</p>
                <div>
                    <p className="heading">Rolling with (Musical) Style</p>
                </div>
                <div
                    className='mx-auto w-[30vw] cursor-pointer'
                    onClick={() => router.push('/quiz')}
                >
                    <img src="/START.png" className='w-full' alt="Start"/>
                </div>
            </div>
        </div>
    );
}
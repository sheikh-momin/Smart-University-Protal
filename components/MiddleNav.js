import React from 'react';
import logo from '../Assets/logo.png'

const MiddleNav = () => {
    return (
        <div className='md:flex  md:justify-center  md:items-center '>
            <img className='h-24 w-24 hidden md:block' src="/navIMG.png"></img>
            <p className='text-5xl font-bold hidden md:block '>Dreamers University</p>
            
            
        </div>
    );
};

export default MiddleNav;
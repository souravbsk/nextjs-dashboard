"use client"
import Link from 'next/link';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { PiMagnifyingGlassBold } from 'react-icons/pi';

const NewItemNav = () => {


    return (
        <div className='flex flex-col md:flex-row gap-4 md:items-center bg-white justify-between py-6 px-8'>
            <ul className='flex flex-col md:flex-row md:items-center gap-6'>
                <li><h2 className='text-2xl font-semibold'>Add new post</h2></li>
                <li><button className='text-base font-medium'>+ Add Content</button></li>
                <li><Link  className='flex items-center font-medium gap-2' href="/"><FiSettings> </FiSettings> Settings</Link></li>
            </ul>
            <form className='relative'>
            <input type="text"  placeholder="Search content.." className="input border-2 border-[#D4D4D4] input-md w-full" />
            <PiMagnifyingGlassBold className='absolute top-1/2 -translate-y-1/2  right-5'></PiMagnifyingGlassBold>
            </form>
        </div>
    );
};

export default NewItemNav;
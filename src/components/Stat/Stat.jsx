import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import {BsShopWindow} from "react-icons/bs"
import { FiUsers } from 'react-icons/fi';

const Stat = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <div className='flex p-5 bg-white rounded-xl items-center gap-3'>
                <AiOutlineShopping className='text-[#EA580C] text-3xl'></AiOutlineShopping>
                <div className='text-[#262626]'>
                    <p className=' text-xs font-light'>Total Sales</p>
                    <h2 className='font-semibold text-2xl'>$2,456</h2>
                </div>
            </div>
            <div className='flex p-5 bg-white rounded-xl items-center gap-3'>
                <BsShopWindow className='text-violet-600 text-3xl'></BsShopWindow>
                <div className='text-[#262626]'>
                    <p className=' text-xs font-light'>Total Expenses</p>
                    <h2 className='font-semibold text-2xl'>$3,326</h2>
                </div>
            </div>
            <div className='flex p-5 bg-white rounded-xl items-center gap-3'>
                <FiUsers className='text-emerald-600 text-3xl'></FiUsers>
                <div className='text-[#262626]'>
                    <p className=' text-xs font-light'>Total Visitors</p>
                    <h2 className='font-semibold text-2xl'>5,325</h2>
                </div>
            </div>
            <div className='flex p-5 bg-white rounded-xl items-center gap-3'>
                <BiMenuAltRight className='text-purple-600 text-3xl'></BiMenuAltRight>
                <div className='text-[#262626]'>
                    <p className=' text-xs font-light'>Total Orders</p>
                    <h2 className='font-semibold text-2xl'>1,326</h2>
                </div>
            </div>
        </div>
    );
};

export default Stat;
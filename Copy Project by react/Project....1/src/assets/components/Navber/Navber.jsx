import React from 'react';

const Navber = () => {
    return (
        <div className='py-3 flex justify-evenly'>
            <div className='py-3'>
               <h1 className='text-3xl font-bold text-gray-700 '>Jaber</h1>
            </div>
            <div className='text-xl font-sans text-gray-600 mx-64 py-3'>
                <ul className='flex'>
                    <li className='mx-4 text-purple-500'><a href="#">Home</a></li>
                    <li className='mx-4'><a href="#">Service</a></li>
                    <li className='mx-4'><a href="#">About</a></li>
                    <li className='mx-4'><a href="#">Testimonials</a></li>
                    <li className='mx-4'><a href="#">Clients</a></li>
                    <li className='mx-4'><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className='py-1'>
                <button className='px-8 py-[10px] rounded-3xl text-xl text-white bg-purple-500'>Call Now</button>
            </div>
        </div>
    );
};

export default Navber;
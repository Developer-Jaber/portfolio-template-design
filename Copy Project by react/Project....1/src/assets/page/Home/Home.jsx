import React from 'react';
import Navber from '../../components/Navber/Navber';
import Hero from '../../components/Hero/Hero';

const Home = () => {
    return (
        <div className='h-screen w-lvw bg-[url("/src/assets/img/bg1.png")] bg-no-repeat '>
            <Navber/>
            <Hero/>
        </div>
    );
};

export default Home;
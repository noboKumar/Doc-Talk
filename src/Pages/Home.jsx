import React from 'react';
import HeroSection from '../components/HeroSection';
import DoctorsSection from '../components/DoctorsSection';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    return (
        <div className='bg-[#EFEFEF]'>
            <HeroSection></HeroSection>
            <DoctorsSection data={data}></DoctorsSection>
        </div>
    );
};

export default Home;
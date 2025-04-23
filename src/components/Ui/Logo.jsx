import React from 'react';
import { LuStethoscope } from 'react-icons/lu';

const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <LuStethoscope className='text-[#176AE5]' size={45} />
            <h1 className='text-xl md:text-3xl font-bold'>DocTalk</h1>
        </div>
    );
};

export default Logo;
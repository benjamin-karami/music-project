import Image from 'next/image';
import React from 'react';
import homeBg from '@/public/assets/images/homeBg.webp';

const Hero = () => {
    return (
        <div className='max-w-[800px] w-full absolute bottom-0 left-0'>
            <Image className='w-full scale-x-[-1]' src={homeBg} alt='hero' />
        </div>
    )
}

export default Hero;
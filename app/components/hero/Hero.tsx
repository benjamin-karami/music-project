import Image from 'next/image';
import React from 'react';
import heroImage from '@/public/assets/images/banner.png'

const Hero = () => {
    return (
        <div className='w-full h-[400px]'>
            <Image className='w-full h-[400px]' src={heroImage} alt='hero' />
        </div>
    )
}

export default Hero;
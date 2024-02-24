'use client';

import React from 'react';
import useScroll from '@/app/lib/hooks/useScroll';
import Link from 'next/link';

const menus = [
  { id: 1, title: 'خانه', path: '/' },
  { id: 2, title: 'درباره من', path: '/' },
  { id: 3, title: 'گالری', path: '/' },
  { id: 4, title: 'تماس با ما', path: '/' },
];

const Navbar = () => {
  const scrolled = useScroll(0);

  return (
    <div
      className={`fixed h-[65px] left-0 right-0 top-0 w-full flex justify-between items-center px-[16px] py-[16px] ${
        scrolled ? 'border-b-2 border-black backdrop-blur-lg' : 'bg-white/0'
      } z-30 transition-all`}
    >
      <div className="flex items-center justify-flex-start">
        {menus.map((menu) => (
          <div className="ml-5" key={`menu-${menu.id}`}>
            <Link href={menu.path}>{menu.title}</Link>
          </div>
        ))}
      </div>
      <span className="text-[50px]" role="img">
        🎻
      </span>
    </div>
  );
};

export default Navbar;

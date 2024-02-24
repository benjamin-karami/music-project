import Hero from '@/app/components/hero/Hero';
import Link from 'next/link';
const menus = [
  { id: 1, title: 'خانه', path: '/', isActive: true },
  { id: 2, title: 'درباره من', path: '/', isActive: false },
  { id: 3, title: 'گالری', path: '/', isActive: false },
  { id: 4, title: 'تماس با ما', path: '/', isActive: false },
];

export default function Home() {
  return (
    <>
      <div className="px-[16px] flex-fol md:flex justify-between items-flex-start">
        <div className="w-full flex flex items-center justify-between">
          {menus.map((menu) => (
            <div className="w-[25%] font-[200] ml-10" key={`menu-${menu.id}`}>
              <Link className={`text-[18px] ${menu.isActive ? 'text-[#ad9586]' : 'text-[#333]'}`} href={menu.path}>{menu.title}</Link>
            </div>
          ))}
        </div>
        <div className='w-[40%]'>
          <h1 className="nastaligh text-[#c6c4b0] text-[30px] md:text-[50px] font-bold">
            آموزشگاه موسیقی<br></br> امیر فتحی
          </h1>
          <p className='text-[18px] font-bold'>
            موسیقی زیباترین نمود هستی انسان و زبان مشترک بین همه انسان‌ها است.
          </p>
        </div>
      </div>
      <Hero />
    </>
  );
}

import Image from 'next/image';
import React from 'react';
import piano from "@/public/assets/images/piano.png";
import violin from "@/public/assets/images/violin.png";

const Instrument = () => {
  return (
    <div className="">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                  <Image
                  className='h-[380px]'
                    src={violin}
                    alt='violin'
                  />
                ویولن
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                ویولن (violin) سازی زهی و آرشه‌ای است و کوچک‌ترین عضو سازهای زهی آرشه‌ای شناخته شده است. ویولن در اصل سازى شرقى است که بعد از جنگ‌هاى صلیبى به اروپا راه یافت. این ساز جنسش از چوب است و وزن سبک و انداه‌اى کوچک دارد. ویولن داراى بدنه، دسته و سر است....
              </dd>
            </div>
            <div className="relative">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                  <Image
                  className='h-[380px]'
                    src={piano}
                    alt='piano'
                  />
                پیانو
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                پیانو یکی از سازهای صفحه‌کلیددار و مشهورترین آن‌ها است. صدای پیانو در اثر برخورد چکش‌هایی با سیم‌های آن تولید می‌شود. این چکش‌ها در اثر فشرده‌شدن کلیدها (کلاویه‌ها) به حرکت در می‌آیند. سیم‌های پیانو به صفحه‌ای موسوم به «صفحهٔ صدا» متصل شده‌اند که نقش تقویت‌کنندهٔ صدای آن‌ها را دارد....
              </dd>
            </div>
          </dl>
        </div>
    </div>
  );
};

export default Instrument;

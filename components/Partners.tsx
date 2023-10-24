'use client';

import Image from 'next/image';
import { partners } from '@/constants/index';

type Props = {};

export default function Partners({}: Props) {
  return (
    <div className='bg-[#FAFAFA] pb-40 xxl:px-96'>
      <h1 className='font-bold md:px-10 pt-20 text-3xl leading-tight md:text-[48px]'>
        Our Partners
      </h1>
      <div className='md:px-20 px-5 mt-5 md:mt-12 grid gap-x-4 lg:gap-0 grid-cols-2 md:grid-cols-4'>
        <Image
          src='/partner2.jpg'
          width={200}
          height={200}
          alt='partner'
          className='rounded-lg shadow-md mb-4'
        />

        <Image
          src='/partner3.jpg'
          width={200}
          height={200}
          alt='partner'
          className='rounded-lg shadow-md mb-4'
        />

        <Image
          src='/partner5.jpg'
          width={200}
          height={200}
          alt='partner'
          className='rounded-lg shadow-md mb-4'
        />

        <Image
          src='/partner8.jpg'
          width={200}
          height={200}
          alt='partner'
          className='rounded-lg shadow-md mb-4'
        />
      </div>

      {/* <Slider {...settings}>
        {partners.map((item) => (
          <div className='w-6/12'>
            <Image
              src={item.img}
              key={item.id}
              width={100}
              height={100}
              alt='partners'
              className='container'
            />
          </div>
        ))}
      </Slider> */}
    </div>
  );
}

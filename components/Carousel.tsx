'use client';

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function CarouselComp() {
  return (
    <>
      <div className='max-w-[1200px] mx-auto'>
        <Carousel
          showArrows={true}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div>
            <Image
              src={'/hackathon1.jpg'}
              alt='Banner image'
              width={1200}
              height={300}
            />
          </div>
          <div>
            <Image
              src='/hackathon2.jpg'
              alt='Banner image'
              width={1200}
              height={300}
            />
          </div>
          <div>
            <Image
              src='/hackathon3.jpg'
              alt='Banner image'
              width={1200}
              height={300}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}

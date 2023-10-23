'use client';

import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type Props = {
  images: Hackathon[];
};

export default function ImageSlider({ images }: Props) {
  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      showThumbs={false}
    >
      {images.map((image: any) => (
        <div key={image.title} className='relative h-96 w-full'>
          <Image
            src={urlForImage(image.mainImage).url()}
            alt={image.title}
            className='rounded-md object-cover'
            fill
          />
        </div>
      ))}
    </Carousel>
  );
}

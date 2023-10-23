import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { groq } from 'next-sanity';
import Image from 'next/image';
import ImageSlider from './ImageSlider';

export const revalidate = 1000;

export default async function PastHackthons() {
  const query = groq`
  *[_type == "hackathon"] {
    title,
    "mainImage": mainImage.asset->url, 
  }`;

  const images = await client.fetch(query);

  return (
    <div className='pb-20'>
      <h2 className='text-3xl font-bold mb-4 sm:px-4'>Past Hackathons</h2>

      <ImageSlider images={images} />
    </div>
  );
}

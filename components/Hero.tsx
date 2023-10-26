import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import { getHeroInfo } from '@/sanity/lib/utils';

export default async function HeroPage() {
  const heroInfo = await getHeroInfo();

  return (
    <>
      {heroInfo.map((hero: any) => (
        <div
          key={hero.title}
          className='bg-[#FAFAFA] pb-20 flex items-center lg:flex-row flex-col'
        >
          <div className='md:px-20 px-5 pt-10 md:pt-20 lg:w-7/12 w-full xxl:px-96'>
            <h1 className='text-3xl md:text-[56px] font-bold max-w-2xl leading-tight'>
              Jumpstarting <span className='textGradient'>Africa's</span>{' '}
              Digital Transformation
            </h1>
            <p className='mt-4 text-lg lg:max-w-md max-w-xl text-gray-500 leading-8'>
              Deep initiative to foster Web2 and Web3 adoption across Africa.
              Significantly promoting blockchain adoption through bootcamps and
              hackathons.
            </p>

            <div className='mt-7 mb-10'>
              <Link
                href='/about'
                className='bg-[#FF761C] px-10 text-white py-3.5 rounded-md shadow-2xl'
              >
                About us
              </Link>
            </div>
          </div>

          <div className='lg:w-6/12 w-full pt-10 md:pt-20 lg:pt-16 md:mr-20 '>
            <Image
              // src={urlForImage(hero.heroImage).url()}
              src='/hero.png'
              width={800}
              height={800}
              alt='hero-image'
            />
          </div>
        </div>
      ))}
    </>
  );
}

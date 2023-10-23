import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import { getHackathons } from '@/sanity/lib/utils';
import { BsClock } from 'react-icons/bs';

export default async function AllHackathonsPage() {
  const hackathons = await getHackathons();

  return (
    <>
      {/* Hero */}
      <div className='pb-20 flex bg-[#FEFEFE] items-center lg:flex-row flex-col'>
        <div className='md:px-20 px-5 pt-10 md:pt-20 lg:w-7/12 w-full xxl:px-96'>
          <h1 className='text-3xl md:text-[56px] font-bold max-w-2xl leading-tight'>
            The Hub for Web3 and Web2{' '}
            <span className='textGradient'>Africa's</span> Hackathons
          </h1>
          <p className='mt-4 text-lg lg:max-w-md max-w-xl text-[#0e0e11] leading-8'>
            Deep initiative to foster Web2 and Web3 adoption across Africa.
            Significantly promoting blockchain adoption through bootcamps and
            hackathons.
          </p>
        </div>

        <div className='lg:w-6/12 w-full pt-10 md:pt-20 lg:pt-16 md:mr-20 '>
          <Image src='/pple.jpg' width={800} height={800} alt='hero-image' />
        </div>
      </div>

      <div className='bg-[#FAFAFA] pb-20 md:px-20 px-5 xxl:px-96 py-10 lg:py-24'>
        <h2 className='text-3xl font-bold mb-2'>
          Explore <span className='textGradient'>Hackathons</span>
        </h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {hackathons.map((hackathon: any) => (
            <Link
              href={`/explore-hackathons/${hackathon.slug}`}
              key={hackathon._id}
            >
              <div className='max-w-md bg-white border border-gray-300 rounded-lg shadow-sm relative'>
                <img
                  className='rounded-t-lg h-48 object-cover'
                  src={urlForImage(hackathon?.mainImage).url()}
                />

                <div className='p-5'>
                  <div className='flex space-x-2 items-center text-[#FF761C]'>
                    <BsClock className='h-5 w-5' />
                    <h2 className='text-[12px]'>{hackathon.text}</h2>
                  </div>
                  <h3 className='mb-2 text-base font-semibold line-clamp-1 mt-3'>
                    {hackathon.title}
                  </h3>
                  <p className='mb-3 text-[14px] font-normal text-gray-500 line-clamp-3'>
                    {hackathon.description}
                  </p>
                  <p className='text-[#FF761C] font-bold text-lg'>
                    Prize: ${hackathon.prize}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

type Props = {
  params: {
    slug: string;
  };
};

// Hackathon details: Ongoing hackathon cards on the landing page
export default async function HackathonDetails({ params: { slug } }: Props) {
  const query = groq`
  *[_type == "hackathons" && slug.current == $slug][0] {
    ...,
  }`;

  const hackathon = await client.fetch(query, { slug });

  return (
    <div className='min-w-[250px] bg-[#FAFAFA] pb-20'>
      {/* Banner hackathon image */}
      <div className='relative h-56 -mt-1'>
        <Image
          src={urlForImage(hackathon?.mainImage).url()}
          alt='image'
          className='object-cover opacity-10'
          fill
        />

        <div className='grid place-items-center pt-10'>
          <h2 className='font-bold text-3xl md:text-5xl lg:text-[54px] text-center'>
            {hackathon.title}
          </h2>
          <p className='text-xl line-clamp-1 max-w-4xl mx-auto px-16 mt-4 !leading-8'>
            {hackathon.text}
          </p>
        </div>
      </div>

      <div className='bg-gray-800 broder border-gray-300 shadow-lg md:px-10 place-items-center grid grid-cols-2 lg:grid-cols-4'>
        <div className='flex flex-col py-4'>
          <p className='font-bold text-lg text-[#FF761C]'>{hackathon.builds}</p>
          <p className='font-semibold text-gray-200 text-center'>Builds</p>
        </div>

        <div className='flex flex-col py-4'>
          <p className='font-bold text-lg text-[#FF761C]'>
            {hackathon.applicants}
          </p>
          <p className='font-semibold text-gray-200 text-center'>Applicants</p>
        </div>

        <div className='flex flex-col py-4'>
          <p className='font-bold text-lg text-[#FF761C]'>{hackathon.prize}</p>
          <p className='font-semibold text-gray-200 text-center'>Prize</p>
        </div>

        <div className='flex flex-col py-4'>
          <p className='font-bold text-lg text-[#FF761C]'>{hackathon.type}</p>
          <p className='font-semibold text-gray-200 text-center'>Session</p>
        </div>
      </div>

      <div className='max-w-5xl mx-auto my-10 lg:my-18 px-5'>
        <Link href='/'>
          <IoArrowBackCircleOutline className='h-8 w-8 text-gray-500 hover:text-[#FF761C]' />
        </Link>

        <p className='md:text-xl mt-5 !leading-8 text-gray-500'>
          {hackathon.text}
        </p>
        <div className='max-w-md mt-5 mb-10 font-bold'>
          <button className='bg-[#FF761C] px-6 text-white py-3.5 rounded-md text-center shadow-2xl'>
            Register to Participate
          </button>
        </div>
      </div>
    </div>
  );
}

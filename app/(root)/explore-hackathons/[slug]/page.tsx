import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

type Props = {
  params: {
    slug: string;
  };
};

//
export default async function ExlporeHackathonsDetails({
  params: { slug },
}: Props) {
  const query = groq`
  *[_type == "hack" && slug.current == $slug][0] {
    ...,
  }`;

  const hackathon = await client.fetch(query, { slug });

  return (
    <div className='min-w-[250px] bg-[#FAFAFA] h-screen'>
      {/* Banner hackathon image */}
      <div className='relative h-64 -mt-1'>
        <Image
          src={urlForImage(hackathon?.mainImage).url()}
          alt='image'
          className='object-cover opacity-30'
          fill
        />

        <div className='grid place-items-center pt-10'>
          <h2 className='font-bold text-3xl md:text-5xl lg:text-[54px] text-center'>
            {hackathon.title}
          </h2>
          <p className='text-xl line-clamp-2 max-w-4xl mx-auto px-16 mt-4 !leading-8'>
            {hackathon.text}
          </p>
        </div>
      </div>

      <div className='bg-gray-800 broder border-gray-300 shadow-lg px-10 place-items-center grid grid-cols-2 lg:grid-cols-4 p-4'>
        <div className='flex flex-col py-6'>
          <p className='font-bold text-4xl text-[#FF761C]'>
            {hackathon.builds}
          </p>
          <p className='font-semibold text-gray-200 text-center'>
            Total Builds
          </p>
        </div>

        <div className='flex flex-col py-6'>
          <p className='font-bold text-4xl text-[#FF761C]'>
            {hackathon.applicants}
          </p>
          <p className='font-semibold text-gray-200 text-center'>Applicants</p>
        </div>

        <div className='flex flex-col py-6'>
          <p className='font-bold text-4xl text-[#FF761C]'>{hackathon.prize}</p>
          <p className='font-semibold text-gray-200 text-center'>Prize</p>
        </div>

        <div className='flex flex-col py-6'>
          <p className='font-bold text-4xl text-[#FF761C]'>{hackathon.type}</p>
          <p className='font-semibold text-gray-200 text-center'>Session</p>
        </div>
      </div>
    </div>
  );
}

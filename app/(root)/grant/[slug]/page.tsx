import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

type Props = {
  params: {
    slug: string;
  };
};

export default async function GrantDetails({ params: { slug } }: Props) {
  const query = groq`
  *[_type == "grants" && slug.current == $slug][0] {
    ...,
  }`;

  const grant = await client.fetch(query, { slug });

  return (
    <div className='min-w-[250px] bg-[#FAFAFA] h-screen'>
      {/* Banner grant image */}
      <div className='relative h-64 -mt-1'>
        <Image
          src={urlForImage(grant?.mainImage).url()}
          alt='image'
          className='object-cover opacity-30'
          fill
        />

        <div className='grid place-items-center pt-10'>
          <h2 className='font-bold text-3xl md:text-5xl lg:text-[54px] text-center'>
            {grant.grantName}
          </h2>
          <p className='text-xl line-clamp-2 max-w-4xl mx-auto px-16 mt-4 !leading-8'>
            {grant.description}
          </p>
        </div>
      </div>

      <div className='bg-gray-800 broder border-gray-300 shadow-lg px-10 place-items-center grid grid-cols-2 lg:grid-cols-4 p-4'>
        <div className='flex flex-col py-6'>
          <p className='font-bold text-lg lg:text-4xl text-[#FF761C]'>
            ${grant.fundsAvailable}
          </p>
          <p className='font-semibold text-gray-200 text-center'>
            funds Available
          </p>
        </div>

        <div className='flex flex-col py-6'>
          <p className='font-bold text-lg lg:text-4xl text-[#FF761C]'>
            ${grant.totalFunded}
          </p>
          <p className='font-semibold text-gray-200 text-center'>
            Total Funded
          </p>
        </div>

        <div className='flex flex-col py-6'>
          <p className='font-bold text-lg lg:text-4xl text-[#FF761C]'>
            {grant.buildsFunded}
          </p>
          <p className='font-semibold text-gray-200 text-center'>
            Builds Funded
          </p>
        </div>

        <div className='flex flex-col py-6'>
          <p className='font-bold text-lg lg:text-4xl text-[#FF761C]'>
            {grant.specialization}
          </p>
          <p className='font-semibold text-gray-200 text-center'>
            Specialization
          </p>
        </div>
      </div>
    </div>
  );
}

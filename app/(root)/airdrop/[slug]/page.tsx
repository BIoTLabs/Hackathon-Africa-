import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';

type Props = {
  params: {
    slug: string;
  };
};

export default async function AirdropDetails({ params: { slug } }: Props) {
  const query = groq`
  *[_type == "airdrops" && slug.current == $slug][0] {
    ...,
  }`;

  const airdrop = await client.fetch(query, { slug });

  return (
    <div className='min-w-[250px] bg-[#FAFAFA] h-screen'>
      {/* Banner airdrop image */}
      <div className='relative h-64 -mt-1'>
        <Image
          src={urlForImage(airdrop?.mainImage).url()}
          alt='image'
          className='object-cover opacity-30'
          fill
        />

        <div className='grid place-items-center pt-10'>
          <h2 className='font-bold text-3xl md:text-5xl lg:text-[54px] text-center'>
            {airdrop.title}
          </h2>
          <p className='text-xl line-clamp-2 max-w-4xl mx-auto px-16 mt-4 !leading-8'>
            {airdrop.text}
          </p>
        </div>
      </div>

      <div className='bg-gray-800 broder border-gray-300 shadow-lg px-10 place-items-center grid grid-cols-2 lg:grid-cols-4 p-4'>
        <div className='flex flex-col py-6'>
          <p className='font-bold text-lg text-[#FF761C]'>
            ${airdrop.claimable}
          </p>
          <p className='font-semibold text-gray-200 text-center'>Cliamable</p>
        </div>

        <div className='flex flex-col py-6'>
          <p className='font-bold text-lg text-[#FF761C]'>
            {airdrop.airdropLink}
          </p>
          {/* Convert to link later */}
          <Link href='#' className='font-semibold text-gray-200 text-center'>
            Visit Airdrop
          </Link>
        </div>

        <div className='flex flex-col py-6'>
          <p className='font-bold text-lg text-[#FF761C]'>
            {airdrop.claimDate}
          </p>
          <p className='font-semibold text-gray-200 text-center'>Claim Date</p>
        </div>

        <div className='flex flex-col py-6'>
          <p className='font-semibold text-[#FF761C] text-center'>Safety</p>
          <p className='font-bold text-lg text-gray-200'>{airdrop.safety}</p>
        </div>
      </div>
    </div>
  );
}

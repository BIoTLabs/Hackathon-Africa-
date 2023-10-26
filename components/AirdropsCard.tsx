import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import { TbMoneybag, TbPigMoney } from 'react-icons/tb';
import { BsClock } from 'react-icons/bs';

type Props = {
  airdrops: Airdrop[];
};

export default function AirdropsCard({ airdrops }: Props) {
  return (
    <div className='grid grid-cols-1 px-5 md:px-10 xxl:px-96 py-10 lg:py-24 bg-[#FAFAFA]'>
      <div className='flex gap-8 lg:flex-row items-center flex-col-reverse py-8'>
        <div className='lg:w-7/12 w-full border border-gray-300 rounded-lg divide-y md:px-4 py-8 bg-white'>
          {airdrops.map((airdrop) => (
            <Link
              key={airdrop._id}
              href={`/airdrop/${airdrop.slug}`}
              className='flex p-3 transform hover:scale-105 transition duration-300 hover:shadow-lg hover:rounded-lg'
            >
              <Image
                src={urlForImage(airdrop.mainImage).url()}
                width={200}
                height={200}
                alt='image'
                className='rounded-lg object-cover mb-2'
              />

              <div className='flex flex-col ml-3'>
                <h2 className='flex-start md:text-[22px] sm:mt-2 font-semibold !line-clamp-1 text-[#FF761C]'>
                  {airdrop.title}
                </h2>

                <div className='flex flex-col py-2 sm:mb-2'>
                  <p className='flex gap-x-1 items-center text-gray-500'>
                    <BsClock className='text-[#FF761C] h-5 w-5' />
                    <span>{airdrop.daysLeft} left</span>
                  </p>
                  <p className='mt-2 flex gap-x-1 items-center text-gray-500'>
                    <TbMoneybag className='text-[#FF761C] h-5 w-5' />
                    <span className='underline font-bold'>Claim Now</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className='lg:w-5/12 w-full ml-4'>
          <h2 className='md:text-4xl text-3xl font-bold'>
            Claimable <span className='textGradient'>Airdrops</span>
          </h2>
          <p className='mt-4 text-base md:text-xl !leading-10 text-gray-500 xxl:max-w-xl'>
            Web3 airdrops are a compelling and innovative way to distribute
            cryptocurrency tokens and digital assets across the blockchain
            ecosystem. They have gained popularity as a means to engage and
            reward users within the Web3 space, and they offer a unique approach
            to building communities and fostering adoption.
          </p>
        </div>
      </div>
    </div>
  );
}

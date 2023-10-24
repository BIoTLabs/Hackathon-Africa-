import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { BsClock, BsStar } from 'react-icons/bs';

type Props = {
  airdrops: Airdrop[];
};

export default function AirdropsCard({ airdrops }: Props) {
  return (
    // Change to link later
    <section className='md:px-10 px-5 pt-10 py-10 lg:py-24 flex sm:flex-col-reverse lg:flex-row flex-col lg:space-x-10 xxl:px-96 bg-[#FAFAFA]'>
      <div className='lg:w-8/12 w-full sm:mt-20 lg:mt-10 grid-cols-1 place-items-center grid md:grid-cols-2 lg:grid-cols-1 gap-x-3'>
        {airdrops.map((airdrop) => (
          <Link
            href={`/airdrop/${airdrop.slug}`}
            key={airdrop._id}
            className='md:p-4 p-2 border mb-3 rounded-lg shadow-sm bg-white border-gray-300 sm:w-fit md:w-full transform hover:scale-105 transition duration-300 hover:border-orange-300'
          >
            <div className='md:flex space-x-4 items-center'>
              <div>
                <Image
                  src={urlForImage(airdrop?.mainImage).url()}
                  width={300}
                  height={300}
                  alt='image'
                  className='rounded-md'
                />
              </div>

              <div className='flex flex-col'>
                <h2 className='flex-start flex-1 text-lg md:text-[22px] sm:mt-3 font-semibold line-clamp-1 text-[#FF761C]'>
                  {airdrop.title.length > 25
                    ? airdrop.title.substring(0, 25) + '...'
                    : airdrop.title}
                </h2>
                <div className='flex flex-col sm:my-3 sm:mb-3'>
                  <div className='text-gray-500 flex items-center font-bold'>
                    $ {airdrop.type}
                  </div>

                  <div className='text-gray-500 flex items-center font-bold mt-1'>
                    {airdrop.daysLeft} left
                  </div>

                  <div className='text-gray-500 font-bold mt-3'>
                    <button className='bg-[#FF761C] px-8 py-2 text-white rounded-md'>
                      Claim Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className='lg:w-4/12 w-full flex flex-col'>
        <h2 className='md:text-4xl text-3xl font-bold sm:mt-10 mt-0'>
          Claimable <span className='textGradient'>Airdrops</span>
        </h2>
        <p className='mt-4 text-base md:text-xl !leading-10 text-gray-500 lg:max-w-md'>
          Web3 airdrops are a compelling and innovative way to distribute
          cryptocurrency tokens and digital assets across the blockchain
          ecosystem. They have gained popularity as a means to engage and reward
          users within the Web3 space, and they offer a unique approach to
          building communities and fostering adoption.
        </p>

        {/* <div className='max-w-md mt-7 font-bold'>
          <Link
            href='/airdrops'
            className='bg-[#FF761C] px-6 text-white py-4 rounded-md text-center block'
          >
            View airdrops
          </Link>
        </div> */}
      </div>
    </section>
  );
}

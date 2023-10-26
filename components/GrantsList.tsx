import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import { TbPigMoney, TbMoneybag } from 'react-icons/tb';

type Props = {
  grants: Grant[];
};

export default function GrantList({ grants }: Props) {
  return (
    <div className='grid grid-cols-1 px-5 md:px-10 xxl:px-96 py-10 lg:py-24'>
      <div className='flex gap-8 lg:flex-row-reverse items-center flex-col-reverse'>
        <div className='lg:w-6/12 w-full border border-gray-300 rounded-lg divide-y md:px-4 py-8 bg-white'>
          {grants.map((grant) => (
            <Link
              key={grant._id}
              href={`/grant/${grant.slug}`}
              className='flex p-3 transform hover:scale-105 transition duration-300 hover:shadow-lg hover:rounded-lg'
            >
              <Image
                src={urlForImage(grant.mainImage).url()}
                width={200}
                height={200}
                alt='image'
                className='rounded-lg object-cover'
              />

              <div className='flex flex-col ml-3'>
                <h2 className='flex-start md:text-[22px] sm:mt-2 font-semibold !line-clamp-1 text-[#FF761C]'>
                  {grant.title}
                </h2>
                <div className='flex flex-col py-2 sm:mb-2'>
                  <div className='flex gap-x-1 items-center text-gray-500'>
                    <TbMoneybag className='text-[#FF761C] h-5 w-5' />$
                    {grant.reserve}
                  </div>
                  <p className='mt-2 flex gap-x-1 items-center text-gray-500'>
                    <TbPigMoney className='text-[#FF761C] h-5 w-5' />
                    <span>{grant.grantRounds}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className='lg:w-6/12 w-full'>
          <h2 className='md:text-4xl text-3xl font-bold'>
            Popular <span className='textGradient'>Grants</span>
          </h2>
          <p className='pt-4 text-base md:text-xl !leading-10 text-gray-500 xxl:max-w-xl'>
            Participate in ongoing grants across Africa and team up to build a
            world-changing product. Take a look at the latest Web2 and Web3
            grants that are taking place across Africa, which can take place
            either virtually or in person. Join a team and build the next world
            class product with other team members across Africa.
          </p>
        </div>
      </div>
    </div>
  );
}

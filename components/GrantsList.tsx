import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { TbPigMoney, TbMoneybag } from 'react-icons/tb';

type Props = {
  grants: Grant[];
};

export default function GrantsList({ grants }: Props) {
  return (
    <section className='px-5 py-10 lg:py-24 flex sm:flex-col-reverse lg:flex-row-reverse flex-col md:space-x-10 bg-[#FAFAFA] xxl:px-96'>
      <div className='lg:w-6/12 w-full lg:mt-10 grid-cols-1 place-items-center grid md:grid-cols-2 lg:grid-cols-1 gap-x-3'>
        {grants.map((grant: any) => (
          <Link
            href={`/grant/${grant.slug}`}
            className='p-2 border mb-3 rounded-lg shadow-sm bg-white border-gray-300 sm:w-fit md:w-full transform hover:scale-105 transition duration-300 hover:border-orange-300'
            key={grant._id}
          >
            <div className='md:flex space-x-4 items-center'>
              <div>
                <Image
                  src={urlForImage(grant?.mainImage).url()}
                  width={300}
                  height={300}
                  alt='image'
                  className='rounded-md'
                />
              </div>

              <div className='flex flex-col'>
                <h2 className='flex-start text-[22px] sm:mt-2 font-semibold line-clamp-1 text-[#FF761C]'>
                  {grant.title}
                </h2>
                <div className='flex flex-col py-2 sm:mb-2'>
                  <div className='flex gap-x-1 items-center text-gray-500'>
                    <TbMoneybag className='text-[#FF761C] h-5 w-5' />
                    {grant.reserve}
                  </div>
                  <p className='mt-2 flex gap-x-1 items-center text-gray-500'>
                    <TbPigMoney className='text-[#FF761C] h-5 w-5' />
                    <span>{grant.grantRounds}</span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className='lg:w-7/12'>
        <h2 className='md:text-4xl text-3xl font-bold mt-0'>
          Popular <span className='textGradient'>Grants</span>
        </h2>
        <p className='mt-4 text-base md:text-xl !leading-10 mb-10 text-gray-500 lg:max-w-lg sm:line-clamp-2 lg:line-clamp-none md:line-clamp-none xxl:line-clamp-none'>
          Participate in hackathons and team up to build the next world-changing
          product. Hackathons encourage out-of-the-box thinking from people.
          Hackathons are great for skill development. You'll have the
          opportunity to learn technical skills from coding and software
          development to project management. Many hackathons also have
          workshops. encourage out-of-the-box thinking from people. Hackathons
          are great for skill development. You'll have the opportunity to learn
          technical skills from coding and software development to project
          management. Many hackathons also have workshops.
        </p>
      </div>
    </section>
  );
}

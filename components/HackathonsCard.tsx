import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

type Props = {
  hackathons: AllHackathon[];
};

export default function HackathonsCard({ hackathons }: Props) {
  return (
    <div className='grid grid-cols-1 px-5 md:px-10 xxl:px-96 py-10 lg:py-24 bg-[#FAFAFA]'>
      <div className='flex gap-8 lg:flex-row flex-col-reverse py-8'>
        <div className='lg:w-7/12 w-full border border-gray-300 rounded-lg divide-y md:px-4 py-8 bg-white'>
          {hackathons.map((hackathon) => (
            <Link
              key={hackathon._id}
              href={`/hackathon/${hackathon.slug}`}
              className='flex p-3 transform hover:scale-105 transition duration-300 hover:shadow-lg hover:rounded-lg'
            >
              <Image
                src={urlForImage(hackathon.mainImage).url()}
                width={200}
                height={200}
                alt='image'
                className='rounded-lg object-cover'
              />

              <div className='ml-3'>
                <div className='flex flex-1 items-center mt-3'>
                  <h2 className='text-lg md:text-[22px] font-semibold line-clamp-1'>
                    {hackathon.title.length > 25
                      ? hackathon.title.substring(0, 25) + '...'
                      : hackathon.title}
                  </h2>
                </div>

                <div className='flex space-x-5 items-center mt-1 sm:my-3 sm:mb-3'>
                  <p>
                    <span className='text-[#FF761C] font-bold'>
                      ${hackathon.prize}
                    </span>{' '}
                    <small className='text-gray-500'>Prize</small>
                  </p>

                  <p>
                    <span className='text-[#FF761C] font-bold'>
                      {hackathon.builds}
                    </span>{' '}
                    <small className='text-gray-500'>Builds</small>
                  </p>
                  <p>
                    <span className='text-[#FF761C] font-bold'>
                      {hackathon.applicants}
                    </span>{' '}
                    <small className='text-gray-500'>Applicants</small>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className='lg:w-4/12 w-full ml-4'>
          <h2 className='md:text-4xl text-3xl font-bold'>
            Ongoing <span className='textGradient'>Hackathons</span>
          </h2>
          <p className='mt-4 text-base md:text-xl !leading-10 text-gray-500'>
            Participate in ongoing hackathons across Africa and team up to build
            a world-changing product. Take a look at the latest Web2 and Web3
            hackathons that are taking place across Africa, which can take place
            either virtually or in person. Join a team and build the next world
            class product.
          </p>

          <div className='max-w-md mt-4 font-bold'>
            <Link
              href='/hackathons'
              className='bg-[#FF761C] px-6 text-white py-3 rounded-md text-center'
            >
              View All Hackathons
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { BsClock, BsStar } from 'react-icons/bs';

type Props = {
  hackathons: AllHackathon[];
};

export default function HackathonsCard({ hackathons }: Props) {
  return (
    // Change to link later
    <section className='md:px-10 px-5 mt-10 py-10 lg:py-24 flex sm:flex-col-reverse lg:flex-row flex-col lg:space-x-10 bg-[#FAFAFA] xxl:px-96'>
      <div className='lg:w-8/12 w-full sm:mt-20 lg:mt-10 grid-cols-1 place-items-center grid md:grid-cols-2 lg:grid-cols-1 gap-x-3'>
        {hackathons.map((hackathon: any) => (
          <Link
            href={`/hackathon/${hackathon.slug}`}
            key={hackathon._id}
            className='md:p-4 p-2 border mb-3 rounded-lg shadow-sm bg-white border-gray-300 sm:w-fit md:w-full transform hover:scale-105 transition duration-300 hover:border-orange-300'
          >
            <div className='md:flex space-x-4 items-center'>
              <div>
                <Image
                  src={urlForImage(hackathon?.mainImage).url()}
                  width={300}
                  height={300}
                  alt='image'
                  className='rounded-md'
                />
              </div>

              <div className='flex flex-col'>
                <h2 className='flex-start flex-1 text-lg md:text-[22px] sm:mt-3 font-semibold line-clamp-1'>
                  {hackathon.title.length > 25
                    ? hackathon.title.substring(0, 25) + '...'
                    : hackathon.title}
                </h2>
                <div className='flex space-x-5 items-center mt-1 sm:my-3 sm:mb-3'>
                  <div className='text-[#FF761C] flex items-center font-bold'>
                    <BsClock className='mr-1.5 w-4 h-4' /> {hackathon.type}
                  </div>

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

              <div className='flex items-center lg:flex-1 lg:justify-end'>
                <div className='flex flex-col md:items-center'>
                  <BsStar className='w-5 h-5 text-[#FF761C]' />
                  <p className='mt-2 text-[#FF761C] font-bold'>
                    ${hackathon.prize}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className='lg:w-4/12 w-full flex flex-col'>
        <h2 className='md:text-4xl text-3xl font-bold sm:mt-10 mt-0'>
          Ongoing <span className='textGradient'>Hackathons</span>
        </h2>
        <p className='mt-4 text-base md:text-xl !leading-10 text-gray-500 lg:max-w-md'>
          Participate in hackathons and team up to build the next world-changing
          product. Hackathons encourage out-of-the-box thinking from people.
          Hackathons are great for skill development in programming
        </p>

        <div className='max-w-md mt-7 font-bold'>
          <Link
            href='/hackathons'
            className='bg-[#FF761C] px-6 text-white py-4 rounded-md text-center block'
          >
            View All Hackathons
          </Link>
        </div>
      </div>
    </section>
  );
}

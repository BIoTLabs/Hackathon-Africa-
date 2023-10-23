import { getBounties } from '@/sanity/lib/utils';
import Link from 'next/link';
import { BsClock, BsPerson } from 'react-icons/bs';

type Props = {};

export default async function BountiesPage({}: Props) {
  const bounties = await getBounties();

  return (
    <div className='md:px-20 px-5 pb-16 bg-[#23252E] rounded-2xl border border-orange-100 shadow-lg w-full xxl:px-96'>
      <div className='pb-5 md:pb-10'>
        <h2 className='md:text-5xl text-3xl font-bold sm:mt-10 mt-0 textGradient'>
          Bounties
        </h2>
        <p className='text-xl text-gray-300 mt-2 leading-8'>
          Get rewarded for taking on challenges and solving problems.
        </p>
      </div>

      <div className='flex justify-between items-center text-lg mt-5 font-bold text-gray-300'>
        <h3 className='text-2xl'>ETH Bounty</h3>
        <Link href='#'>View All Bounties</Link>
      </div>

      <div className='grid grid-cols-1 md:grid-col-2 gap-3 lg:grid-cols-3 mt-2'>
        {bounties.map((bounty) => (
          <div
            key={bounty._id}
            className='rounded shadow-md border border-stone-500 p-4'
          >
            <h3 className='font-bold text-gray-300'>{bounty.title}</h3>
            <div className='my-3'>
              <span className='bg-orange-400 font-bold text-white text-sm px-2.5 py-0.5 rounded-sm'>
                {bounty.amount}
              </span>
            </div>

            <div className='flex items-center gap-1 text-gray-300'>
              <BsClock className='text-[#FF761C] mr-1' /> {bounty.type}
              <BsPerson className='ml-2 text-[#FF761C]' /> {bounty.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

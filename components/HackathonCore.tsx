import { cores } from '@/constants/index';
import Image from 'next/image';

type Props = {};

export default function HackathonCore({}: Props) {
  return (
    <div className='py-20 lg:py-24 md:px-20 px-5 core relative xxl:px-96'>
      <h2 className='text-3xl md:text-[56px] font-bold text-center leading-none'>
        <span className='textGradient'>Hackathon Africa</span> main objective
      </h2>

      <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {cores.map((core) => (
          <div key={core.id} className='rounded-2xl shadow-lg p-12'>
            <p className='text-lg font-bold'>{core.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

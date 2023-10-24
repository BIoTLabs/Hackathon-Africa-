'use client';

import Image from 'next/image';
import ReactPlayer from 'react-player';

export default function Bootcamps() {
  return (
    <section className='px-5 py-10 flex lg:flex-row flex-col lg:space-x-10 space-x-2 lg:py-24 bg-[#FAFAFA] xxl:px-96 w-full'>
      <div className='lg:w-1/2 w-full'>
        <h2 className='md:text-4xl md:px-10 text-3xl font-bold mt-0'>
          Previous <span className='textGradient'>Bootcamps</span>
        </h2>

        <p className='mt-4 text-base md:text-xl !leading-10 mb-10 text-gray-500 md:px-10'>
          Here you will see compiled video materials on recorded live sessions
          and pre-recorded sessions for both developers and non-developers alike
          going through the Campus Blockchain Bootcamp and Hackathon Program
          sponsored by ICP. Participants are expected to go through all
          materials as applied to them. If you miss any live session, it will be
          published here within 24 hours for your views and questions on any of
          the materials are to be directed to the Telegram or slack channel.
          Watch out for the sessions tagged DEVS Only.
        </p>
      </div>

      <div className='lg:w-1/2 shadow-lg rounded-xl py-4 border border-gray-300'>
        <ReactPlayer
          url='https://youtu.be/6Rhmr3Vl1Ko'
          width='100%'
          height='100%'
        />
      </div>
    </section>
  );
}

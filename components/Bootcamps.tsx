import Image from 'next/image';

type Props = {};

export default function Bootcamps({}: Props) {
  return (
    <section className='px-5 py-10 lg:py-24 bg-[#FAFAFA] xxl:px-96 w-ful'>
      <div className='md:grid place-items-center'>
        <h2 className='md:text-4xl text-3xl font-bold mt-0'>
          <span className='textGradient'>Bootcamps</span>
        </h2>
        <p className='mt-4 text-base md:text-xl !leading-10 mb-10 text-gray-500 md:px-10'>
          Here you will see compiled video materials on recorded live sessions
          and pre-recorded sessions for both developers and non-developers alike
          going through the Campus Blockchain Bootcamp and Hackathon Program
          sponsored by ICP. Participants are expected to go through all
          materials as applied to them. If you miss any live session, it will be
          published here within 24 hours for your views and questions on any of
          the materials are to be directed to the Telegram or slack channel.
          Watch out out for the sessions tagged (DEVS Only).
        </p>
      </div>
    </section>
  );
}

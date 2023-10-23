type Props = {};

export default function HackathonCover({}: Props) {
  return (
    <div className='!md:px-0 relative py-16 after:absolute after:inset-0 after:z-[-1] after:bg-home after:bg-cover after:bg-center after:bg-no-repeat lg:pt-10 md:px-20 px-5 xxl:px-96'>
      <div className='flex flex-col justify-center items-center my-10'>
        <h2 className='font-bold text-3xl leading-tight md:text-[48px] text-white text-center'>
          Join our hackathon if you are a coder looking for interactive practice
          and challenge.
        </h2>

        <p className='text-lg md:text-xl text-white max-w-4xl mt-5 !leading-8'>
          We are aware of the unique educational, skills, and other challenges
          that the African community faces daily and are committed to adapting
          our organization to meet their needs. To jumpstart African countries
          on the journey of digital transformation, bootcamps and hackathons are
          vital.
        </p>
      </div>
    </div>
  );
}

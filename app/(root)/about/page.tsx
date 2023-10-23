import PastHackthons from '@/components/PastHackthons';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className='bg-[#FAFAFA] pb-10 flex lg:flex-row flex-col'>
      <div className='md:w-11/12 lg:px-20 flex flex-col px-5 w-full pt-10 md:pt-20 xxl:px-96'>
        <h1 className='text-3xl font-bold'>About</h1>
        <p className='mt-3 leading-8 w-full xxl:max-w-5xl'>
          Most African University education curriculum isn’t equipped with the
          requirements to facilitate growth in the digital age of the 4th
          industrial revolution. The graduates are pushed into an ecosystem they
          barely recognize after years within the walls of the institution of
          learning. The 4th industrial revolution technologies comprise
          Artificial intelligence, Machine learning, Blockchain technology, Big
          data analytics, the Internet of Things, and so on. An average graduate
          of an African University has barely heard about any of these
          technologies. This creates a threatened future, limiting our ability
          to scale in a fast-growing space and increasing our dependence on
          other nations.
        </p>

        <p className='leading-8 w-full xxl:max-w-5xl'>
          The Future of Tech lies in synergy of existing 4IR technologies and
          not in isolated solutions. Hackathon Africa provides the basis for
          University students among others to learn about Blockchain technology
          and the Internet of things as applicable to their various departments.
          It encourages them to come up with viable ideas with project design
          and pitch for a minimum viable product to be reviewed by judges and
          guided by the tech team on implementation.
        </p>
      </div>

      <div className='lg:w-10/12 xxl:px-96 mt-10 lg:mt-20'>
        <PastHackthons />
      </div>
    </div>
  );
}

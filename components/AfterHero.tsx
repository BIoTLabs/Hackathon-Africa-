import { icons } from '@/constants/index';
import { BiLogoCodepen } from 'react-icons/bi';

// Section immediatedly after the hero page
export default function AfterHero() {
  return (
    <section className='my-20 lg:my-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-20 px-5 xxl:px-96'>
      {icons.map((icon) => (
        <div key={icon.name}>
          <h2 className='text-[#FF761C]'>{icon.icon}</h2>
          <h3 className='font-bold text-2xl md:text-3xl mt-4'>{icon.name}</h3>
          <div className='w-11/12'>
            <p className='mt-2 text-lg leading-8 text-gray-500'>{icon.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

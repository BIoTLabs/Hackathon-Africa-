import Hero from '@/components/Hero';
import AfterHero from '@/components/AfterHero';
import Hackathons from '@/components/Hackathons';
import Grants from '@/components/Grants';
import Bounties from '@/components/Bounties';
import Partners from '@/components/Partners';
import Airdrops from '@/components/Airdrops';
import Bootcamps from '@/components/Bootcamps';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AfterHero />
      <Hackathons />
      <Grants />
      <Airdrops />
      <Bootcamps />
      <Bounties />
      <Partners />
    </>
  );
}

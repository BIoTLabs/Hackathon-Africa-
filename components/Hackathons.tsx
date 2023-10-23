import { getAllHackathons } from '@/sanity/lib/utils';
import HackathonsCard from './HackathonsCard';

export default async function Hackathons() {
  // 👉 Fetch all hackathons from Sanity backend
  const hackathons = await getAllHackathons();

  // Hackathon listings on the landing page
  return <HackathonsCard hackathons={hackathons} />;
}

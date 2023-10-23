import { getAirdrops } from '@/sanity/lib/utils';
import AirdropsCard from './AirdropsCard';

export default async function Airdrops() {
  // 👉 Fetch all airdrops from Sanity backend
  const airdrops = await getAirdrops();

  // Airdrops listings on the landing page
  return <AirdropsCard airdrops={airdrops} />;
}

import { getGrants } from '@/sanity/lib/utils';
import GrantsList from './GrantsList';

export default async function Grants() {
  const grants = await getGrants();

  return <GrantsList grants={grants} />;
}

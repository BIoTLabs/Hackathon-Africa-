import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import author from './schemas/author';
import pastHackathon from './schemas/pastHackathon';
import hackathons from './schemas/hackathons';
import grants from './schemas/grants';
import allHackathons from './schemas/allHackathons';
import bounties from './schemas/bounties';
import airdrops from './schemas/airdrops';
import hero from './schemas/hero';
// import muxVideo from './schemas/muxVideo';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    author,
    blockContent,
    pastHackathon,
    hackathons,
    grants,
    allHackathons,
    bounties,
    airdrops,
    hero,
  ],
};

import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import category from './schemas/category';
import post from './schemas/post';
import author from './schemas/author';
import pastHackathon from './schemas/pastHackathon';
import hackathons from './schemas/hackathons';
import grants from './schemas/grants';
import allHackathons from './schemas/allHackathons';
import bounties from './schemas/bounties';
import airdrops from './schemas/airdrops';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    pastHackathon,
    hackathons,
    grants,
    allHackathons,
    bounties,
    airdrops,
  ],
};

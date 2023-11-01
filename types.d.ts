type Hackathon = {
  _id: number;
  title: string;
  prize: string;
  body: PortableTextBlock[];
};

type AllHackathon = {
  _id: number;
  title: string;
  builds: string;
  applicants: string;
  type: string;
  text: string;
  mainImage: {
    type: string;
  };
  prize: string;
  slug: {
    current: string;
  };
};

type Grant = {
  _id: number;
  title: string;
  reserve: string;
  grantRounds: string;
  mainImage: {
    type: string;
  };
  slug: {
    current: string;
  };
};

type Hackathons = {
  _id: number;
  title: string;
  builds: string;
  applicants: string;
  type: string;
  daysLeft: string;
  text: string;
  mainImage: {
    type: string;
  };
  prize: string;
  slug: {
    current: string;
  };
};

// type Hackathons = {
//   _id: number;
//   title: string;
//   text: string;
//   description: string;
//   prize: string;
//   mainImage: {
//     type: string;
//   };
//   slug: {
//     current: string;
//   };
// };

type Bounties = {
  _id: number;
  title: string;
  amount: string;
  type: string;
  name: string;
};

type Airdrop = {
  _id: number;
  title: string;
  type: string;
  text: string;
  daysLeft: string;
  slug: {
    current: string;
  };
  mainImage: {
    type: string;
  };
  Claimable: string;
  airdropLink: string;
  claimDate: string;
  safety: string;
};

type Hero = {
  title: string;
  heroHeading: string;
  heroText: string;
  heroImage: string;
};

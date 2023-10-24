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
  mainImage: string;
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
  mainImage: string;
};

type Hackathons = {
  _id: number;
  title: string;
  text: string;
  description: string;
  prize: string;
  mainImage: string;
  slug: {
    current: string;
  };
};

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
  daysLeft: string;
  slug: {
    current: string;
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

import { createClient, groq } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env';
import { client } from './client';

//👉 Fetch all hackathons
export async function getAllHackathons(): Promise<AllHackathon[]> {
  return client.fetch(
    groq`
    *[_type == "hackathons"] {
      _id,
      type,
      title,
      text,
      builds,
      applicants,
      prize,
      "slug":slug.current,
      "mainImage": mainImage.asset->url, 
    }
    `
  );
}

//👉 Fetch all grants
export async function getGrants(): Promise<Grant[]> {
  return client.fetch(
    groq`
    *[_type == "grants"] {
      _id,
      title,
      reserve,
      grantRounds,
      "slug":slug.current,
      "mainImage": mainImage.asset->url, 
    }
    `
  );
}

//👉 Fetch all hackathons from the /all-hackathons route
export async function getHackathons(): Promise<Hackathons[]> {
  return client.fetch(
    groq`
    *[_type == "hack"] {
      _id,
      title,
      text,
      description,
      prize,
      "slug":slug.current,
      "mainImage": mainImage.asset->url, 
    }
    `
  );
}

//👉 Fetch all bounties
export async function getBounties(): Promise<Bounties[]> {
  return client.fetch(
    groq`
    *[_type == "bounties"] {
      _id,
      title,
      amount,
      type,
      name,
      "slug":slug.current,
    }
    `
  );
}

//👉 Fetch all airdrops
export async function getAirdrops(): Promise<Airdrop[]> {
  return client.fetch(
    groq`
    *[_type == "airdrops"] {
      _id,
      title,
      daysLeft,
      text,
      type,
      Claimable,
      airdropLink,
      claimDate,
      safety,
      "mainImage": mainImage.asset->url, 
      "slug":slug.current,
    }
    `
  );
}

export async function getHeroInfo(): Promise<Hero[]> {
  return client.fetch(
    groq`
    *[_type == "hero"] {
      title,
      heroHeading,
      heroText,
      "heroImage": heroImage.asset->url, 
    }
    `
  );
}

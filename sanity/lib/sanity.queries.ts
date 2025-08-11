import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { AllPostsQueryResult } from '@/sanity.types.js';

export async function getAllPosts(): Promise<AllPostsQueryResult> {
  const allPostsQuery = groq`*[_type == "post" && defined(slug.current)] {
    _id,
    title,
    slug,
    author-> {
      name,
      slug
    },
    mainImage {
      asset->,
      alt
      },
    publishedAt
  }| order(publishedAt asc)`;

  const result = await client.fetch(allPostsQuery);
  return result;
}

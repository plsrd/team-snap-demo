import { groq, type SanityDocument } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getAllPosts() {
  const ALL_POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] {
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

  const result = await client.fetch(ALL_POSTS_QUERY);
  return result;
}

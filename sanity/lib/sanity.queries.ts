import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { AllPostsQueryResult, PostQueryResult } from '@/sanity.types';

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

export async function getPost(postSlug: string): Promise<PostQueryResult> {
  const postQuery = groq`*[_type == 'post' && slug.current == $slug]{
    title,
    author->{
      name
    },
  }[0]`;

  const result = await client.fetch(postQuery, { slug: postSlug });
  return result;
}

import Link from 'next/link.js';
import { type SanityDocument } from 'next-sanity';
import { client } from '@/sanity/lib/client.ts';

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] {
  _id,
  title,
  slug,
  author-> {
    name,
    slug
  },
  "image": mainImage.asset,
  publishedAt
}`;

export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
  console.log(posts);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

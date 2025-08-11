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
}| order(publishedAt asc)`;

export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return (
    <div>
      <section className='mx-auto max-w-5xl'>
        <div className='mb-6 space-y-2'>
          <h1 className='text-3xl font-semibold tracking-tight'>All Posts</h1>
        </div>
        <ul className='grid gap-4 sm:grid-cols-2'>
          {posts.map(({ _id, slug, title, author }) => {
            if (!slug || !author) return null;
            const authorName = author.name || 'Unknown Author';
            const postHref = `/posts/${slug.current}`;
            return (
              <li
                key={_id}
                className='rounded-lg border p-4 transition-colors hover:bg-accent'
              >
                <Link href={postHref} className='block space-y-1'>
                  <h2 className='text-lg font-medium'>{title}</h2>
                  <p className='text-sm text-muted-foreground'>
                    By {authorName}
                  </p>
                  <p className='text-xs text-muted-foreground'>Read more...</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

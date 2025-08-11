import Link from 'next/link';
import Image from 'next/image';
import { type SanityDocument } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] {
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

export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return (
    <div>
      <section className='mx-auto max-w-5xl'>
        <div className='mb-6 space-y-2'>
          <h1 className='text-3xl font-semibold tracking-tight'>All Posts</h1>
        </div>
        <ul className='grid gap-4 sm:grid-cols-2'>
          {posts.map(({ _id, slug, title, author, mainImage }) => {
            if (!slug || !author) return null;
            const authorName = author.name || 'Unknown Author';
            const postHref = `/posts/${slug.current}`;
            const postImageUrl = urlFor(mainImage.asset).url();
            return (
              <li
                key={_id}
                className='overflow-hidden rounded-lg border transition-colors hover:bg-accent'
              >
                <Link href={postHref} className='block space-y-1'>
                  <div className='aspect-video overflow-hidden'>
                    <Image
                      src={postImageUrl}
                      alt={mainImage.alt || `Hero image for ${title}`}
                      width={400}
                      height={200}
                      className='h-full w-full object-cover transition-transform hover:scale-105'
                    />
                  </div>
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

import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { AllPostsQueryResult } from '@/sanity.types';

type Post = AllPostsQueryResult[number];

export default function PostCard({
  _id,
  slug,
  title,
  author,
  mainImage,
}: Post) {
  if (!slug || !author) return null;
  const authorName = author.name || 'Unknown Author';
  const postHref = `/posts/${slug.current}`;
  const postImageUrl = mainImage?.asset
    ? urlFor(mainImage.asset).url()
    : '/placeholder.svg';
  return (
    <li
      key={_id}
      className='overflow-hidden rounded-lg border transition-colors hover:bg-accent'
    >
      <Link href={postHref} className='block space-y-1'>
        <div className='aspect-video overflow-hidden'>
          <Image
            placeholder='blur'
            blurDataURL={mainImage?.asset?.metadata?.lqip || ''}
            src={postImageUrl}
            alt={mainImage?.alt || `Hero image for ${title}`}
            width={400}
            height={200}
            className='h-full w-full object-cover transition-transform hover:scale-105'
          />
        </div>
        <div className='p-4 space-y-1'>
          <h2 className='text-lg font-medium'>{title}</h2>
          <p className='text-sm text-muted-foreground'>By {authorName}</p>
        </div>
      </Link>
    </li>
  );
}

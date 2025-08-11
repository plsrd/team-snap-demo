import SiteWrapper from '@/components/SiteWrapper';
import { getPost } from '@/sanity/lib/sanity.queries';
import { notFound } from 'next/navigation.js';

type PostProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function Post({ params, searchParams }: PostProps) {
  const { slug } = await params;

  // Fetch the post data from Sanity using the slug
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteWrapper searchParams={searchParams}>
      <article className='mx-auto max-w-3xl space-y-3'>
        {post && (
          <>
            <h1 className='text-3xl font-bold tracking-tight'>{post.title}</h1>
            <p className='text-muted-foreground'>By {post.author?.name}</p>
            <hr className='my-4' />
            <p className='text-muted-foreground'>
              {
                'This is a placeholder for the post content. We would use the @portabletext/react package to render the body content here in a real blog.'
              }
            </p>
          </>
        )}
      </article>
    </SiteWrapper>
  );
}

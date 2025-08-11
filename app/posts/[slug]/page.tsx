import SiteWrapper from '@/components/SiteWrapper';
import { getPost } from '@/sanity/lib/sanity.queries';

type PostProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function Post({ params, searchParams }: PostProps) {
  const searchParamsData = await searchParams;
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <SiteWrapper searchParams={searchParamsData}>
      <article className='mx-auto max-w-3xl space-y-3'>
        <h1 className='text-3xl font-bold tracking-tight'>{post.title}</h1>
        <p className='text-muted-foreground'>By {post.author?.name}</p>
        <hr className='my-4' />
        <p className='text-muted-foreground'>
          {
            'This is a placeholder for the post content. We would use the @portabletext/react package to render the body content here in a real blog.'
          }
        </p>
      </article>
    </SiteWrapper>
  );
}

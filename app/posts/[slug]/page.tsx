import { getPost } from '@/sanity/lib/sanity.queries';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Post(props: Props) {
  const { slug } = await props.params;
  const post = await getPost(slug);
  if (!post) {
    return <div>Post not found</div>;
  }

  console.log('Post data:', post);

  return (
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
  );
}

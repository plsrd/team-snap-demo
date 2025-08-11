import { getAllPosts } from '@/sanity/lib/sanity.queries';
import PostCard from '@/components/PostCard';
import SiteWrapper from '@/components/SiteWrapper';

export default async function AllPosts({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const posts = await getAllPosts();
  return (
    <SiteWrapper searchParams={params}>
      <section className='mx-auto max-w-5xl'>
        <div className='mb-6 space-y-2'>
          <h1 className='text-3xl font-semibold tracking-tight'>All Posts</h1>
        </div>
        <ul className='grid gap-4 sm:grid-cols-2'>
          {posts.map(post => (
            <PostCard key={post._id} {...post} />
          ))}
        </ul>
      </section>
    </SiteWrapper>
  );
}

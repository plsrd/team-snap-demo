import { getAllPosts } from '@/sanity/lib/sanity.queries';
import PostCard from '@/components/PostCard';

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <div>
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
    </div>
  );
}

import SiteWrapper from '@/components/SiteWrapper';
import Link from 'next/link';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  return (
    <SiteWrapper searchParams={params}>
      <section className='mx-auto max-w-3xl space-y-6 text-center'>
        <div className='inline-block rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground'>
          Welcome!
        </div>
        <h1 className='text-balance text-4xl font-bold tracking-tight sm:text-5xl'>
          This is an example of a Sanity-powered blog
        </h1>
        <p className='text-pretty text-muted-foreground sm:text-lg'>
          UTM parameters are stored locally and can be seen in the footer.
          Navigate around to see how they persist across pages.
        </p>
        <div className='flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4'>
          <Link
            href='/posts'
            className='inline-flex h-10 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
          >
            Browse Posts
          </Link>
          <Link
            href='/posts?utm_source=demo&utm_medium=link&utm_campaign=homepage'
            className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
          >
            Try with Demo UTMs
          </Link>
        </div>
      </section>
    </SiteWrapper>
  );
}

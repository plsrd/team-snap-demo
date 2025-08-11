import Link from 'next/link.js';

export default function NotFound() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
        <p className='mt-4 text-lg text-muted-foreground'>
          The page you are looking for does not exist.
        </p>
        <Link
          href='/'
          className='mt-6 inline-block text-blue-600 hover:underline'
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}

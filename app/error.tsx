'use client';

import Link from 'next/link';

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>An Error Occurred</h1>
        <p className='mt-4 text-lg text-muted-foreground'>
          {error.message || 'Something went wrong.'}
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

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className='border-t bg-background'>
      <div className='container mx-auto px-4 py-6 text-sm text-muted-foreground'>
        <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
          <p className='order-2 md:order-1'>
            {'© '}
            {new Date().getFullYear()}
            {' TeamSnap Challenge By RD Pennell. All rights reserved.'}
          </p>
          <nav className='order-1 md:order-2 flex gap-4'>
            <Link href='/' className='hover:underline underline-offset-4'>
              Home
            </Link>
            <Link href='/posts' className='hover:underline underline-offset-4'>
              Posts
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type UTMData = {
  utm_source?: string;
  utm_medium?: string;
};

export default function SiteFooter() {
  const [utm, setUtm] = useState<UTMData | null>(null);
  useEffect(() => {
    // Function to retrieve UTM data from localStorage
    const getUtmData = () => {
      try {
        const data = localStorage.getItem('utm_data');
        if (data) {
          const parsedData = JSON.parse(data);
          // Remove any keys with null or undefined values
          Object.keys(parsedData).forEach(
            k => parsedData[k] == null && delete parsedData[k]
          );
          setUtm(parsedData);
        }
      } catch (error) {
        console.error('Error retrieving UTM data:', error);
        setUtm(null);
      }
    };
    getUtmData();

    // Listen for changes in localStorage
    // This is useful if UTM data is updated in another tab or window
    const onStorageChange = (event: StorageEvent) => {
      if (event.key === 'utm_data') {
        getUtmData();
      }
    };

    window.addEventListener('storage', onStorageChange);
    return () => {
      window.removeEventListener('storage', onStorageChange);
    };
  }, []);

  // Function to remove UTM data from localStorage
  const reset = () => {
    localStorage.removeItem('utm_data');
    setUtm(null);
  };

  return (
    <footer className='border-t bg-background'>
      <div className='container mx-auto px-4 py-6 text-sm text-muted-foreground'>
        <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
          <p className='order-2 md:order-1'>
            {'© '}
            {new Date().getFullYear()}
            {' TeamSnap Challenge By RD Pennell'}
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
        <div className='mt-4 rounded-md border bg-muted/40 p-3'>
          <div className='flex items-center justify-between'>
            <span className='font-medium text-foreground'>
              Campaign Tracking
            </span>
            <button
              onClick={reset}
              className='text-xs underline underline-offset-4 hover:text-foreground'
              aria-label='Clear stored UTM tracking'
            >
              Reset
            </button>
          </div>
          {utm && Object.keys(utm).length > 0 ? (
            <ul className='mt-2 grid gap-1 text-xs sm:grid-cols-2 md:grid-cols-3'>
              {Object.keys(utm).map(i => (
                <li key={i}>
                  <span className='text-foreground'>{i}:</span>{' '}
                  <span className='break-all'>
                    {utm[i as keyof UTMData] ?? '—'}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className='mt-2 text-xs'>
              No UTM parameters found yet. Add utm_source, utm_medium, or
              utm_campaign to the URL.
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}

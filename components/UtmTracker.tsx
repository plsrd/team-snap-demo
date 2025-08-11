'use client';

import { useEffect } from 'react';

export default function UtmTracker() {
  useEffect(() => {
    const existingParams = localStorage.getItem('utm_data')
      ? JSON.parse(localStorage.getItem('utm_data') || '{}')
      : {};

    const urlParams =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search)
        : new URLSearchParams();
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');

    const mergedParams = {
      ...existingParams,
      utmMedium,
      utmSource,
    };
    localStorage.setItem('utm_data', JSON.stringify(mergedParams));
  }, []);

  return null; // This component does not render anything
}

'use client';

import { useEffect } from 'react';

type SearchParams = Record<string, string | string[] | undefined>;

export type UTMTrackerProps = {
  initialSearchParams?: SearchParams;
};

const TRACKABLE_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
];

export default function UtmTracker(
  { initialSearchParams = {} }: UTMTrackerProps = { initialSearchParams: {} }
) {
  useEffect(() => {
    // Retrieve existing UTM parameters from localStorage
    const existingParams = localStorage.getItem('utm_data')
      ? JSON.parse(localStorage.getItem('utm_data') || '{}')
      : {};

    // Check for existing UTM parameters in the URL
    const urlParams =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search)
        : new URLSearchParams();

    // Merge initial search params with URL params
    for (const [key, val] of Object.entries(initialSearchParams)) {
      if (typeof val === 'string') urlParams.set(key, val);
      if (Array.isArray(val) && val.length > 0) urlParams.set(key, val[0]!);
    }

    // Extract only the trackable UTM parameters from the URL
    const found = Object.fromEntries(
      TRACKABLE_KEYS.map(k => [k, urlParams.get(k) || ''] as const).filter(
        ([, v]) => v && v.trim().length > 0
      )
    ) as Record<string, string>;

    // If no trackable UTM parameters are found, do nothing
    if (Object.keys(found).length === 0) return;

    // Merge existing params with found UTM parameters
    const mergedParams = {
      ...existingParams,
      ...found,
    };

    // Store the merged parameters in localStorage
    localStorage.setItem('utm_data', JSON.stringify(mergedParams));
  }, [initialSearchParams]);

  return null; // This component does not render anything
}

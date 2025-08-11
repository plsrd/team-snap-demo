import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Turned off to show immediate updates, this would likely be configured differently in a production environment
  perspective: 'published',
});

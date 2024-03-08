import {createClient} from '@sanity/client';
import {queryStore} from './sanity.loader';

const client = createClient({
  apiVersion: '2023-10-01',
  dataset: 'production',
  projectId: 'gbcm3da4',
  stega: {
    enabled: true,
    studioUrl: 'https://my-studio.sanity.io',
  },
});

queryStore.setServerClient(client);
const {loadQuery} = queryStore;

export {loadQuery};

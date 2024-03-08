import {json} from '@shopify/remix-oxygen';
import {loadQuery} from '~/lib/sanity.server';

export async function loader() {
  const data = loadQuery(`*[_type == "home"]`);

  return json({data});
}

export default function Index() {
  return null;
}

import {defineConfig} from 'vite';
import {hydrogen, oxygen} from '@shopify/cli-hydrogen/experimental-vite';
import {vitePlugin as remix} from '@remix-run/dev';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    hydrogen(),
    oxygen(),
    remix({buildDirectory: 'dist'}),
    tsconfigPaths(),
  ],
  ssr: {
    optimizeDeps: {
      include: ['@sanity/react-loader', '@sanity/client', 'parse-headers'],
    },
  },
});

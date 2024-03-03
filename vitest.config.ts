import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    mockReset: true,
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/'],
      provider: 'v8',
    },
  },
});

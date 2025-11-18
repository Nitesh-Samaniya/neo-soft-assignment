import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,           // allows global test(), expect(), etc.
    environment: 'jsdom',    // simulate browser
    setupFiles: './vitest.setup.ts'
  },
})

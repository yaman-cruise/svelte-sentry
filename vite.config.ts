import { sentrySvelteKit } from '@sentry/sveltekit'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    sentrySvelteKit({
      sourceMapsUploadOptions: {
        telemetry: false,
        org: 'demo',
        project: 'javascript-sveltekit',
        url: 'http://localhost:3000/',
      },
    }),
    sveltekit(),
  ],
})

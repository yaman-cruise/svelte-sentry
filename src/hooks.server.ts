import * as Sentry from '@sentry/sveltekit'

Sentry.init({
  dsn: '',
  tracesSampleRate: 0.1,
  enabled: true,
  environment: 'test',
})

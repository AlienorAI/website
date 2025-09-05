import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel({
    serviceName: 'alienor-website',
    instrumentationConfig: {
      fetch: {
        propagateContextUrls: [],
      },
    },
  })
}

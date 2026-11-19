/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    https://www.googletagmanager.com
    https://*.clarity.ms
    https://analytics.ahrefs.com
    https://assets.calendly.com;
  style-src 'self' 'unsafe-inline'
    https://fonts.googleapis.com
    https://assets.calendly.com;
  font-src 'self'
    https://fonts.gstatic.com;
  img-src 'self' data: blob:
    https://images.unsplash.com
    https://www.googletagmanager.com
    https://*.clarity.ms
    https://c.bing.com
    https://analytics.ahrefs.com
    https://a0.muscache.com
    https://cf2.bstatic.com
    https://www.expedia.com
    https://www.vrbo.com
    https://www.hotels.com
    https://www.cloudbeds.com
    https://www.mews.com
    https://www.oracle.com
    https://www.guesty.com
    https://www.resnexus.com
    https://www.airbnb.com
    https://abbyconnect.com
    https://smith.ai
    https://www.mapcommunications.com
    https://www.patlive.com
    https://www.ruby.com
    https://rentalsunited.com
    https://assets.calendly.com
    https://d3v0px0pttie1i.cloudfront.net
    https://*.google.com
    https://stats.g.doubleclick.net;
  frame-src
    https://www.googletagmanager.com
    https://calendly.com
    https://assets.calendly.com;
  connect-src 'self'
    https://www.google-analytics.com
    https://analytics.google.com
    https://www.googletagmanager.com
    https://*.clarity.ms
    https://analytics.ahrefs.com
    https://calendly.com
    https://stats.g.doubleclick.net
    https://region1.google-analytics.com
    https://region1.analytics.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
`.replace(/\n/g, ' ').trim();

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async headers() {
    return [
      {
        source: "/downloads/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy,
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.guestsquad.com' }],
        destination: 'https://guestsquad.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

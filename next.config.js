/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      'https://microsignupapi-preprod.findanexpert.net/',
      'https://microsignupapi.findanexpert.net/',
      '1864597015.rsc.cdn77.org',
      'https://1864597015.rsc.cdn77.org/',
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/images/',
              outputPath: 'static/images/',
            },
          },
        ],
      })
    }

    return config
  }
}

module.exports = nextConfig

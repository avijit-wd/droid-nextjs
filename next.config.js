/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [],
  },

  env: {
    MONGO_URI:
      "mongodb+srv://avijitb440:uwxANBpSCbleTm1S@cluster0.nffhybm.mongodb.net/?retryWrites=true&w=majority",

    NEXTAUTH_URL: "http://localhost:3000",

    GOOGLE_CLIENT_ID:
      "199511913225-l1nhmemgn086td9ceoc7nr03g98fvqqv.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
};

module.exports = nextConfig;

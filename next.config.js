/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    MONGO_URI:
      "mongodb+srv://avijitb440:uwxANBpSCbleTm1S@cluster0.nffhybm.mongodb.net/?retryWrites=true&w=majority",

    NEXTAUTH_URL: "",
  },
};

module.exports = nextConfig;

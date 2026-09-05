import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Tells Next.js to generate static HTML files
  
  // Optional: If you are using the <Image /> component with a static export,
  // you must disable the default server-side optimization
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const path = require('path')

const nextConfig: NextConfig = {
    sassOptions: {
    implementation: 'sass-embedded',
    includePaths: [path.join(__dirname, './src/sass')],
    prependData: `@import "main.sass"`
  },
};

export default nextConfig;

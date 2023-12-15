/** @type {import('next').NextConfig} */

const webpack = require("webpack");
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  }
};

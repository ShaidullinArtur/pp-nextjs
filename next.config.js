const withPlugins = require('next-compose-plugins');
const nextCSS = require('@zeit/next-css');
const nextImages = require('next-images');
const svgr = require("next-svgr");

const nextConfig = {
  publicRuntimeConfig: {
    API_URL: process.env.API_URL || 'http://localhost:3000'
  }
};

module.exports = withPlugins(
  [
    [nextCSS, {
      cssModules: true
    }],
    nextImages,
    svgr
  ], nextConfig
);

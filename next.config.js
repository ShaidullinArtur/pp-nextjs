const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");
const withPlugins = require("next-compose-plugins");
const nextCSS = require("@zeit/next-css");
const nextImages = require("next-images");
const svgr = require("next-svgr");

const nextConfig = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  }
};

module.exports = withPlugins(
  [
    [
      nextCSS,
      {
        cssModules: true
      }
    ],
    nextImages,
    svgr
  ],
  nextConfig
);

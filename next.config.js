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
    nextCSS({
      webpack: function(config) {
        config.module.rules.push({
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000,
              name: "[name].[ext]"
            }
          }
        });
        return config;
      }
    }),
    nextImages,
    svgr
  ],
  nextConfig
);

const nodeExternals = require("webpack-node-externals");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (config, context) => {
  return {
    ...config,
    target: "node",
    optimization: {
      usedExports: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
            output: {
              comments: false,
            },
          },
        }),
      ],
      splitChunks: {
        chunks: "all",
      },
    },
    mode: "production",
    resolve: {
      extensions: [".js", ".jsx"],
    },

    externals: [nodeExternals()],
    node: {
      global: true,
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          enforce: "pre",
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                // Prefer `dart-sass`
                implementation: require("sass"),
              },
            },
            "source-map-loader", // Re-added source-map-loader for source maps
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                    useBuiltIns: "usage",
                    corejs: 3,
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        },
      ],
    },
    // ignoreWarnings: [/Failed to parse source map/], // Removed ignoreWarnings
  };
};

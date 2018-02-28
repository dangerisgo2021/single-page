const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {

  const nodeEnv = process.env.NODE_ENV || 'development';
  const isProd = nodeEnv === 'production';
  const isClient = env.base === 'client';

  return {

    devtool: isProd ? false : 'eval-source-map',

    entry: isClient
      ? { client: path.join(__dirname, './src/client/client.jsx') }
      : { server: path.join(__dirname, './src/server/server.js') },

    output: {
      path: path.resolve(__dirname,  (isClient ? './public/client' : './build/server')),
      filename: '[name].js',
      publicPath: '/',
    },
    node: {
      __filename: true,
      __dirname: true,
    },
    resolve: {
      alias: {
        '~': path.join(__dirname, './src'),
      },
      extensions: ['.js', '.json', '.jsx'],
    },

    target: isClient ? 'web' : 'node',

    module: {
      rules: [
        {
          test: /\.pcss$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [
                    require('postcss-import'),
                    require('postcss-cssnext'),
                    require('postcss-nested'),
                  ],
                },
              },
            ],
          }),
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react',
              'stage-0',
            ],
          },
        },
      ],
    },

    devServer: {
      historyApiFallback: true,
    },

    plugins: isClient ? [
      new ExtractTextPlugin('/client.css'),
      new webpack.DefinePlugin({
      // http://stackoverflow.com/a/35372706/2177568
      // for server side code, just require, don't chunk
      // use `if (ONSERVER) { ...` for server specific code
      ONSERVER: false,
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
      new HtmlWebpackPlugin({
        template: 'src/client/index.html',
        inject: 'body',
        filename: 'index.html',
      }),
    ] : [
      new ExtractTextPlugin('/client.css'),
      new webpack.DefinePlugin({
        // http://stackoverflow.com/a/35372706/2177568
        // for server side code, just require, don't chunk
        // use `if (ONSERVER) { ...` for server specific code
        ONSERVER: true,
        'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
      }),

    ],
  };
};

const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV.trim(),
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../ChromeExtension/dist'),
    publicPath: 'chrome-extension://kliibdckegfemgeimfpabobagohdojag/dist/',
  },
};

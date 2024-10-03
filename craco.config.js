const path = require('path');
const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@TodoPage': path.resolve(__dirname, 'src/components/pages/TodoPage'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
  },
  mode: 'development',
  output: {
    path: __dirname,
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/index.scss',
      },
    },
  ],
};

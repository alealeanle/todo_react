const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@TodoPage': path.resolve(__dirname, 'src/components/pages/TodoPage'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
  },
};

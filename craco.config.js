const path = require('path');

const resolve = (arg) => path.resolve(__dirname, arg);

const eslintConfig = require('./.eslintrc.js');

module.exports = function () {
  return {
    babel: {
      plugins: ['react-hot-loader/babel'],
    },
    webpack: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
        '~': resolve('src'),
        '~ui': resolve('src/ui'),
        '~assets': resolve('src/assets'),
        '~sections': resolve('src/sections'),
      },
    },
    eslint: {
      mode: 'extends',
      configure: {
        ...eslintConfig,
      },
      loaderOptions: (eslintOptions) => ({ ...eslintOptions, ignore: true }),
    },
  };
};

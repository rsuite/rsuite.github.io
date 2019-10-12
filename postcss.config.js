const { NODE_ENV } = process.env;
const __DEBUG__ = NODE_ENV === 'development';

module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['> 1%', 'last 2 versions', 'ie >= 9']
    }),
    require('postcss-rtl')({
      // onlyDirection: 'rtl'
    }),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: !__DEBUG__
          }
        }
      ]
    })
  ]
};

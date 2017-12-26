const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const markdownLoader = require('react-markdown-reader').renderer;
const hotJarTraking = fs.readFileSync('./src/hotjar-tracking.html', 'utf-8');


const iconPath = path.resolve(__dirname, './node_modules/rsuite-icon-font/icons');

const { NODE_ENV } = process.env;
const extractLess = new ExtractTextPlugin({
  filename: '[contenthash].css',
  disable: NODE_ENV === 'development'
});
const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(NODE_ENV)
    }
  }),
  extractLess,
  new webpack.optimize.ModuleConcatenationPlugin(),
  new HtmlwebpackPlugin({
    title: 'RSUITE | 一套 React 的 UI 组件库',
    filename: (NODE_ENV === 'development' ? '' : '../') + 'index.html',
    template: 'src/index.html',
    hotjarTraking: NODE_ENV === 'production' ? hotJarTraking : '',
    inject: true,
    hash: true
  })
];
const publicPath = NODE_ENV === 'development' ? '/' : '/assets/';

if (NODE_ENV === 'development') {
  plugins.push(new webpack.DllReferencePlugin({
    context: path.resolve(__dirname, 'src/'),
    manifest: require('./dist/vendor-manifest.json')
  }));
}

if (NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
  plugins.push(new webpack.BannerPlugin(`Last update: ${new Date().toString()}`));
  plugins.push(new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|html)$/,
    threshold: 10240,
    minRatio: 0.8
  }));

}

const common = {
  entry: path.resolve(__dirname, 'src/'),
  devServer: {
    hot: true,
    publicPath: '/',
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'transform-loader/cacheable?brfs',
          'babel-loader?babelrc'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        loader: extractLess.extract({
          use: [
            {
              loader: 'css-loader',
            }, {
              loader: 'postcss-loader',
            }, {
              loader: 'less-loader',
              options: {
                modifyVars: {
                  'base-color': '#6292f0',
                }
              }
            }
          ],
          // use style-loader in development
          fallback: 'style-loader?{attrs:{prop: "value"}}'
        })
      },
      {
        test: /\.md$/,
        use: [{
          loader: 'html-loader'
        }, {
          loader: 'markdown-loader',
          options: {
            pedantic: true,
            renderer: markdownLoader.renderer
          }
        }]
      },
      {
        test: /\.(jpg|png)$/,
        //`publicPath`  only use to assign assets path in build
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)($|\?)/,
        exclude: [iconPath],
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1,
            size: 16,
            hash: 'sha512',
            digest: 'hex',
            name: 'resources/[hash].[ext]',
            publicPath: NODE_ENV === 'development' ? '/' : './'
          }
        }]
      },
      {
        test: /\.svg$/,
        include: [iconPath],
        use: [{
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'icon-[name]'
          }
        }]
      }]
  },
  plugins: plugins
};

module.exports = () => {
  if (NODE_ENV === 'development') {
    return Object.assign({}, common, {
      entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://127.0.0.1:3200',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'src/index')
      ],
      devtool: 'source-map'
    });
  }

  return Object.assign({}, common, {
    entry: path.resolve(__dirname, 'src/index')
  });
};

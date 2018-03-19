const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const markdownRenderer = require('react-markdown-reader').renderer;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const iconPath = ['./node_modules/rsuite-theme', '../rsuite-theme'].map(relativePath =>
  path.resolve(__dirname, relativePath)
);

const { NODE_ENV, STYLE_DEBUG, IE_DEBUG } = process.env;
const __PRO__ = NODE_ENV === 'production';

const extractLess = new ExtractTextPlugin({
  filename: '[contenthash].css'
});

const getStyleLoader = () => {
  const sourceMap = STYLE_DEBUG === 'SOURCE' ? '?sourceMap' : '';
  const loaders = ['css-loader', 'postcss-loader', 'less-loader'];
  const filterLoader = loader =>
    STYLE_DEBUG === 'STYLE' || IE_DEBUG || __PRO__ ? true : loader !== 'postcss-loader';
  return loaders.filter(filterLoader).map(loader => ({
    loader: `${loader}${sourceMap}`
  }));
};

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    compress: true,
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    port: 3200
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['transform-loader?brfs', 'babel-loader?babelrc'],
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        loader: extractLess.extract({
          use: getStyleLoader(),
          // use style-loader in development
          fallback: 'style-loader?{attrs:{prop: "value"}}'
        })
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader',
            options: {
              pedantic: true,
              renderer: markdownRenderer
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        //`publicPath`  only use to assign assets path in build
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              publicPath: '/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)($|\?)/,
        include: iconPath,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              size: 16,
              hash: 'sha512',
              digest: 'hex',
              name: 'resources/[hash].[ext]',
              publicPath: '/'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        exclude: iconPath,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    extractLess,
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'RSUITE | 一套 React 的 UI 组件库',
      template: 'src/index.html',
      inject: true,
      hash: true
    })
  ]
};

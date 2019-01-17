const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const markdownRenderer = require('react-markdown-reader').renderer;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const iconPath = ['./node_modules/rsuite/styles', '../rsuite/styles'].map(
  relativePath => path.resolve(__dirname, relativePath)
);

const { NODE_ENV, STYLE_DEBUG, ENV_LOCALE } = process.env;
const __PRO__ = NODE_ENV === 'production';

const extractLess = new ExtractTextPlugin('style.[hash].css');

const getStyleLoader = () => {
  const sourceMap = STYLE_DEBUG === 'SOURCE' ? '?sourceMap' : '';
  const loaders = ['css-loader', 'postcss-loader', 'less-loader'];
  const filterLoader = loader =>
    STYLE_DEBUG === 'STYLE' || __PRO__ ? true : loader !== 'postcss-loader';
  return loaders.filter(filterLoader).map(loader => ({
    loader: `${loader}${sourceMap}`
  }));
};

const languages = [
  'javascript',
  'bash',
  'xml',
  'css',
  'less',
  'json',
  'diff',
  'typescript'
];

module.exports = Object.assign(
  {
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      disableHostCheck: true,
      historyApiFallback: {
        rewrites: [
          { from: /^\/en/, to: '/en/index.html' },
          { from: /./, to: '/index.html' }
        ]
      },
      compress: true,
      host: '0.0.0.0',
      port: 3200
    },
    entry: {
      polyfills: './src/polyfills.js',
      app: './src/index.js',
      app_en: './src/index-en.js'
    },
    output: {
      filename: '[name].bundle.js?[hash]',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: 'commons',
            chunks: 'initial',
            minChunks: 2
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            //'transform-loader?brfs', // Use browserify transforms as webpack-loader.
            'babel-loader?babelrc'
          ],
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
                renderer: markdownRenderer(languages)
              }
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

      new webpack.ContextReplacementPlugin(
        /highlight\.js\/lib\/languages$/,
        new RegExp(`^./(${languages.join('|')})$`)
      ),
      new webpack.DefinePlugin({
        //__RSUITE_CLASSNAME_PREFIX__: JSON.stringify('react-suite-'),
        DEPLOY_ENV: JSON.stringify(process.env.DEPLOY_ENV)
      }),
      new webpack.NamedModulesPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
      new HtmlwebpackPlugin({
        title: 'RSUITE | React Suite | 一套 React 的 UI 组件库',
        chunks: ['polyfills', 'commons', 'app'],
        template: 'src/index.html',
        inject: true
      }),
      new HtmlwebpackPlugin({
        title: 'RSUITE | React Suite | A suite of React components',
        chunks: ['polyfills', 'commons', 'app_en'],
        filename: 'en/index.html',
        template: 'src/index.html',
        inject: true
      }),
      new LodashModuleReplacementPlugin({
        collections: true,
        paths: true
      })
      //new BundleAnalyzerPlugin({ openAnalyzer: false })
    ],
    devtool: STYLE_DEBUG === 'SOURCE' && 'source-map'
  },
  __PRO__
    ? {}
    : {
        resolve: {
          alias: {
            rsuite: path.resolve(__dirname, '../rsuite')
          }
        }
      }
);

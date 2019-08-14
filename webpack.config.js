const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const multipleThemesCompile = require('webpack-multiple-themes-compile');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const markdownRenderer = require('react-markdown-reader').renderer;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebpackHandleCssInjectPlugin = require('./scripts/HtmlWebpackHandleCssInjectPlugin');

const iconPath = [
  './node_modules/rsuite/lib/styles',
  '../rsuite/src/styles'
].map(relativePath => path.resolve(__dirname, relativePath));
const resolveToStaticPath = relativePath =>
  path.resolve(__dirname, relativePath);

const { NODE_ENV, STYLE_DEBUG, ENV_LOCALE } = process.env;
const __PRO__ = NODE_ENV === 'production';

const extractLess = new ExtractTextPlugin('style.[hash].css');

const getStyleLoader = () => {
  const loaders = [
    { loader: 'css-loader' },
    { loader: 'postcss-loader' },
    {
      loader: 'less-loader',
      options: {
        javascriptEnabled: true,
        globalVars: {
          rootPath: __PRO__ ? '~' : '../../../../'
        }
      }
    }
  ];
  const filterLoader = loader =>
    STYLE_DEBUG === 'STYLE' || __PRO__
      ? true
      : loader.loader !== 'postcss-loader';
  return loaders.filter(filterLoader).map(loader => {
    _.set(loader, 'options.sourceMap', STYLE_DEBUG === 'SOURCE');
    return loader;
  });
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

const themesConfig = multipleThemesCompile({
  themesConfig: {
    default: {},
    dark: {}
  },
  styleLoaders: getStyleLoader(),
  lessContent: themeName => `// Generate by Script.
@import '../index.less';
@import '../themes/${themeName}.less';

@theme-name: ${themeName};`,
  cwd: path.resolve(__dirname, './'), // 将相对目录修改为 webpack.config.js 所在目录
  cacheDir: './src/less/themes-cache', // 输出目录
  outputName: themeName => `resources/css/${themeName}.css`
});

module.exports = merge(
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
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'commons',
            chunks: 'all'
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
        title: 'React Suite | RSUITE | 一套 React 的 UI 组件库',
        chunks: ['polyfills', 'commons', 'app'],
        template: 'src/index.html',
        inject: true,
        // 排除 themes.js
        excludeChunks: ['themes']
      }),
      new HtmlwebpackPlugin({
        title: 'React Suite | RSUITE | A suite of React components',
        chunks: ['polyfills', 'commons', 'app_en'],
        filename: 'en/index.html',
        template: 'src/index.html',
        inject: true,
        // 排除 themes.js
        excludeChunks: ['themes']
      }),
      new HtmlWebpackHandleCssInjectPlugin({
        filter: () => false
      }),
      new LodashModuleReplacementPlugin({
        collections: true,
        paths: true
      })
      //new BundleAnalyzerPlugin({ openAnalyzer: false })
    ],
    devtool: STYLE_DEBUG === 'SOURCE' && 'source-map'
  },
  themesConfig,
  __PRO__
    ? {
        resolve: {
          alias: {
            '@': resolveToStaticPath('./src')
          }
        }
      }
    : {
        resolve: {
          alias: {
            '@': resolveToStaticPath('./src'),
            rsuite: path.resolve(__dirname, '../rsuite')
          }
        }
      }
);

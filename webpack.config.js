var path = require('path');
var webpack = require('webpack');
var marked = require('marked');
var hl = require('highlight.js');

const pkg = require('./package.json');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const codeRenderer = function (code, lang) {
    lang = lang === 'js' ? 'javascript' : lang;
    if (lang === 'html') {
        lang = 'xml';
    }

    var hlCode = lang ? hl.highlight(lang, code).value : hl.highlightAuto(code).value;

    return `<div class="doc-highlight"><pre><code class="${lang || ''}">${hlCode}</code></pre></div>`;
};

var renderer = new marked.Renderer();

renderer.code = codeRenderer;

var plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin('[name].css'),
    new HtmlwebpackPlugin({
        varsion: pkg.version,
        title: 'RSUITE | 一套 React 的 UI 组件库',
        filename: '../index.html',
        template: 'src/index.html',
        inject: true,
        hash: true
    }),
];

const output = {
    path: path.join(__dirname, 'assets'),
    filename: '[name].bundle.js'
}

if (process.env.NODE_ENV === 'production') {

    plugins.push(new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor']
    }));

    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));

    plugins.push(new webpack.BannerPlugin(`Last update: ${new Date().toString()}`));

    output.publicPath = './assets/';
}

module.exports = {
    entry: {
        index: './src/index',
        vendor: ['react', 'react-router', 'react-dom', 'lodash', 'classnames', 'dom-lib', 'codemirror']
    },
    output,
    node: {
        fs: 'empty'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'transform/cacheable?brfs',
                    'babel?babelrc'
                ],
                exclude: /node_modules/
            }, {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            }, {
                test: /\.md$/,
                loader: 'html!markdown'
            }, {
                test: /\.(jpg|png)$/,
                loader: 'url?limit=8192'
            }
        ]
    },
    plugins: plugins,
    markdownLoader: {
        renderer: renderer
    }
};

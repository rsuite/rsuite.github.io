# Customize theme

## Import less

Create a separate `.less` file as follows, and then introduce this file.

```less
@import '~rsuite/styles/less/index.less'; //The default style file.
@import 'custom-theme.less'; // Style customization.
```

If you use [webpack](http://webpack.github.io/) to build your project, you need to configure [less-loader](https://github.com/webpack-contrib/less-loader) 。

## For customization

The RSUITE style uses [Less][less] as the development language and defines a series of variables that can be customized using [Modify Variables][modify variables]. This includes but is not limited to customizing theme colors, resizing component fillet radii, modifying font styles, replacing auxiliary colors, and so on. The code in the following example is a new action in `custom-theme.less`.

### Custom Theme Colors

Sets the theme base color.

```less
@base-color: #00bcd4;
```

After you configure the theme base color, a set of swatches (`@H050` - `@H900`, H is Hue) reference is generated: [constants.less](rsuite-theme-pallete).

Now go to the [palette](/tools/palette) to select the appropriate color or upload your own Logo to preview.

### Adjusts the fillet radius of the assembly.

```less
@border-radius-base: 2px;
```

### Modify the font style.

```less
@font-family-base: 'Lucida Grande', 'Avenir Next', 'Helvetica Neue', Helvetica,
  Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', STXihei,
  sans-serif;
@font-size-base: 14px;
```

### Replace the auxiliary color.

Information, successes, warnings, errors, respectively, the corresponding color, modified to affect the [Message](../components/message), Notification](../components/notification) and other needs to display the status of the components.

```less
@info-color: #2196f3;
@info-light-color: #e9f5fe;

@success-color: #4caf50;
@success-light-color: #edfae1;

@warning-color: #ffb300;
@warning-light-color: #fff9e6;

@error-color: #f44336;
@error-light-color: #fde9ef;
```

### Disable ripple animation

```less
@button-ripple: false;
```

## More Custom Configurations

We provide a rich variable, if still unable to meet your customized needs, welcome to our [issue][issue].

> See: [variables.less][variables.less]。

## FAQ

<a id="note"></a>

### How to configure font files locally?

The icon font files used in Rsuite are deployed in [jsDelivr CDN](http://cdn.jsdelivr.net/npm/rsuite-icon-font@3.0.0/fonts/),
If you want to deploy locally, you need to modify the path to the icon font:

```less
@icon-font-path: './fonts';
```

In addition, you will also need to configure `url-loader` in webpack to load icon font files, webpack 4 configuration example:

```js
{
  test: /\.(woff|woff2|eot|ttf|svg)($|\?)/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 1,
        size: 16,
        hash: 'sha512',
        digest: 'hex',
        name: '[hash].[ext]',
        publicPath: '/'
      }
    }
  ]
}
```

### How to globally modify the component's className prefix, `rs-` ?

First, define `@ns` in your `less` file to override the default configuration.

```less
@ns: custom-;
```

Then, the constant `__RSUITE_CLASSNAME_PREFIX__` is injected via webpack , and the className prefix of all components overrides the default `rs-` by the injected constant.

```js
plugins: [
  //...
  new webpack.DefinePlugin({
    __RSUITE_CLASSNAME_PREFIX__: JSON.stringify('custom-')
  })
];
```

If you use [`create-react-app`][cra] to create a project, you can modify it with [`react-app-rewire-less`][rarl] and [`react-app-rewire-define-plugin`][rardp].

[cra]: https://github.com/facebook/create-react-app
[rarl]: https://www.npmjs.com/package/react-app-rewire-less
[rardp]: https://www.npmjs.com/package/react-app-rewire-define-plugin
[less]: http://lesscss.org/
[modify variables]: http://lesscss.org/usage/#using-less-in-the-browser-modify-variables
[rsuite-theme-pallete]: https://github.com/rsuite/rsuite/blob/master/styles/less/constants.less#L32
[issue]: https://github.com/rsuite/rsuite/issues/new
[variables.less]: https://github.com/rsuite/rsuite/blob/master/styles/variables.less

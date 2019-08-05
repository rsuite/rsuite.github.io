# Internationalization

`rsuite` in the component's internal copy default to English, if you need to set other languages, can be configured through `<Intlprovider>`.

## Usage

```jsx
import { IntlProvider } from 'rsuite';
import zhCN from 'rsuite/lib/IntlProvider/zh_CN';

ReactDOM.render(
  <IntlProvider locale={zhCN}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
```

Supported languages: [locales](https://github.com/rsuite/rsuite/tree/master/src/IntlProvider/locales)

## Expand or modify language

参考 [default](https://github.com/rsuite/rsuite/blob/master/src/IntlProvider/locales/default.js) 中的配置，做一个新的配置，把新的配置，传递给 `<IntlProvider>` 的 `locale` 属性。

Refer to the configuration in [default](https://github.com/rsuite/rsuite/blob/master/src/IntlProvider/locales/default.js) to make a new configuration,

Pass the new configuration to the `locale` property of `<Intlprovider>`.

## Used with react-intl

```jsx
import { IntlProvider } from 'react-intl';
import { IntlProvider as RSIntlProvider } from 'rsuite';
import zhCN from 'rsuite/lib/IntlProvider/locales/zh_CN';

ReactDOM.render(
  <IntlProvider locale="zh">
    <RSIntlProvider locale={zhCN}>
      <App />
    </RSIntlProvider>
  </IntlProvider>,
  document.getElementById('root')
);
```

More Configuration references: [react-intl](https://github.com/yahoo/react-intl)

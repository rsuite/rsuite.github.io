# 国际化

`rsuite` 在组件内部文案默认为英文，如果需要设置其他其他语言，可以通过 `<IntlProvider />` 进行配置。

## 使用示例

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

目前支持的语言: [locales](https://github.com/rsuite/rsuite/tree/master/src/IntlProvider/locales)

## 扩展或者修改语言

参考 [default](https://github.com/rsuite/rsuite/blob/master/src/IntlProvider/locales/default.js) 中的配置，做一个新的配置，把新的配置，传递给 `<IntlProvider>` 的 `locale` 属性。

## 与 react-intl 同时使用

```jsx
import { IntlProvider } from 'react-intl';
import { IntlProvider as RSIntlProvider } from 'rsuite';
import zhCN from 'rsuite/lib/IntlProvider/zh_CN';

ReactDOM.render(
  <IntlProvider locale="zh">
    <RSIntlProvider locale={zhCN}>
      <App />
    </RSIntlProvider>
  </IntlProvider>,
  document.getElementById('root')
);
```

更多配置参考: [react-intl](https://github.com/yahoo/react-intl)

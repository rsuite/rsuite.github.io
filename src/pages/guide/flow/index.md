# Flow

[flow](https://flow.org/) 是一个 Javascript 的静态类型检查工具， 您可以将它添加到项目中来提高开发人员的生产力和代码质量。 这里提供了一个使用了 Flow 的[示例项目](https://github.com/rsuite/rsuite-management-system)。


## flow-typed

[flow-typed](https://github.com/flow-typed/flow-typed) 是由 Flow 社区维护的一个类型定义的存储库。本项目在[社区中的定义]((https://github.com/flow-typed/flow-typed/blob/master/definitions/npm/rsuite_v3.x.x/flow_v0.53.x-/rsuite_v3.x.x.js)。

## flow-typed CLI

flow-typed 提供了安装包的客户端，通过执行 `flow-typed install` 会根据 package.json 中的依赖进行安装，也可以指定安装一个库的指定版本。

```bash
flow-typed install rsuite@3.x.x
```


# Flow

[Flow](https://flow.org/) is a static typechecker for JavaScript， You can add it to your project to increase developer productivity and code quality. Here is a [sample project](https://github.com/rsuite/rsuite-management-system) that uses Flow.


## flow-typed

[flow-typed](https://github.com/flow-typed/flow-typed) is a repository of third-party library interface definitions for use with Flow. The community is maintaining [the definitions under this project]((https://github.com/flow-typed/flow-typed/blob/master/definitions/npm/rsuite_v3.x.x/flow_v0.53.x-/rsuite_v3.x.x.js).

## flow-typed CLI

flow-typed provides the client for the installation package. It will be installed according to the dependencies in package.json by executing `flow-typed install`, or you can specify to install a specific version of the library.

```bash
flow-typed install rsuite@3.x.x
```

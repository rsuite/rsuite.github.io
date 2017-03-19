# rsuite-theme
<br/>
本主题基于 [bootstrap](https://github.com/twbs/bootstrap) 进行定制修改。主要特点：
> 1. 遵循[HyperS](http://www.hypers.com)前端框架[pagurian](http://pagurian.com/design/)设计规范。并进行了大量改进优化。
> 2. 配置后一键生成主题样式
> 3. 增加各种动效
> 4. 支持ie9+、chrome、firefox等各种主流浏览器

<br/>
#### 使用

#### install
```bash
npm install rsuite-theme -g
```

<br/>
##### Usage examples
在项目根目录下新建`rsuite.config.js`

```javascript
const colors = {
    "default": "#00bcd4",
    "pagurian": "#1b9451"
};

module.exports = {
    "palette": [
        {
            colors,
            "output": "dist/test/css/"
        },
        {
            colors,
            "prev": "loading-",
            "output": "dist/test/css/",
            "src": "css/loading.min.css"
        }
    ],
    "resources": {
        paths: [
            'fonts/**/*.*'
        ],
        dist: 'dist/test'
    }
};
```
在项目根目录下运行
```bash
rsuite-theme -I -P
```
<br/>
#### 帮助

```bash
rsuite-theme -h
```
<br/>
#### 配置项

- `options.resources` `{Object}` 导入资源
-  `options.resources.path`  **必填**
需要导入的资源，支持正则匹配,如`fonts/**/*.*`,`css/*.css`等,资源列表详见目录结构
- `options.resources.dist` **必填** 输出目录,相对于运行使的脚本目录
- `options.palette` `{Array <palette>}` 按照主题色输出css文件  **必填**

- `palette` `{Object}`
-  `palette.colors` `{Object}`  输出的基色的配置 **必填**
    - `<key>`:输出文件的文件名
    - `<value>`:输出文件的基色 每一个键值对对应一个css文件,如:`{'default':'#00bcd4'}`会输出一个名为`default.css`的文件，其基色为`#dddd`
- `palette.src` 源文件 默认为:`css/rsuite.min.css`
- `palette.dist` **必填** 输出目录,相对于运行使的脚本目录
-  `prev` 输出文件的前缀名 输出文件为`<output>/<prev><colors.key>.css`的格式，如
```json
{
    "colors":{
        "default": "#00bcd4"
    },
    "prev": "loading-",
    "output": "dist/test/css/",
    "src": "css/loading.min.css"
}
```
输出文件为:
`dist/test/css/loading-default.css`


#### 开发

##### 生成样式
```bash
$ npm install
$ grunt
```

##### 生成Demo站点
```bash
$ grunt exampleSite
```

##### 目录结构

```
Root
├── dist/                   //发布目录
│   ├── css/                //css
│   ├── fonts/              //字体
│   └── less/               //less源文件
└── docs //开发文档
```

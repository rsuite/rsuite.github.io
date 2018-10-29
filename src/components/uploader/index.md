# Uploader 上传文件

* `<Uploader>`

## 获取组件

```js
import { Uploader } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Uploader>`

| 属性名称             | 类型 `(默认值)`                                                            | 描述                                                                          |
| -------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| action \*            | string                                                                     | 文件上传地址, 必选                                                            |
| accept               | string                                                                     | 接受上传的文件类型                                                            |
| autoUpload           | boolean `(true)`                                                           | 选择文件后自动上传                                                            |
| classPrefix          | string `('uploader')`                                                      | 组件 CSS 类的前缀                                                             |
| fileList             | Array<FileType>                                                            | 已经上传的文件列表 （受控）                                                   |
| defaultFileList      | Array<FileType>                                                            | 已经上传的文件列表                                                            |
| data                 | Object                                                                     | 上传所带的参数                                                                |
| disabled             | boolean                                                                    | 禁用                                                                          |
| multiple             | boolean                                                                    | 允许一次选择多个文件上传                                                      |
| name                 | string `('file')`                                                          | 上传对应文件的参数名                                                          |
| timeout              | number                                                                     | 设置上传超时                                                                  |
| withCredentials      | boolean                                                                    | 上传请求时是否携带 cookie                                                     |
| headers              | Object                                                                     | 设置上传的请求头部                                                            |
| listType             | menu: 'text' , 'picture-text' , 'picture' `('text')`                       | 上传列表的样式                                                                |
| shouldQueueUpdate    | (fileList: Array<FileType>, newFile: Array<FileType>, FileType) => boolean | 允许更新队列。在选择文件后，更新上传文件队列前的校验函数，返回 false 则不更新 |
| shouldUpload         | (file: FileType) => boolean                                                | 允许上传文件。在文件上传前的的校验函数，返回 false 则不上传                   |
| onChange             | (fileList: Array<FileType>) => void                                        | 上传队列发生改变的回调函数                                                    |
| onUpload             | (file: FileType) => void                                                   | 上传文件开始的回调函数                                                        |
| onError              | (reason: Object, file: FileType) => void                                   | 上传出现错误的回调函数                                                        |
| onSuccess            | (response: Object, file: FileType) => void                                 | 上传成功后的回调函数                                                          |
| onProgress           | (percent: number, file: FileType) => void                                  | 上传进度发生变化的回调函数                                                    |
| onPreview            | (file: FileType, event: SyntheticEvent&lt;any&gt;) => void                 | 在文件列表中，点击已上传的文件的回调函数                                      |
| onRemove             | (file: FileType) => void                                                   | 在文件列表中，点击删除一个文件的回调函数                                      |
| onReupload           | (file: FileType) => void                                                   | 在文件列表中，对上传失败的文件，点击重新上传的回调函数                        |
| toggleComponentClass | React.ElementType `('button')`                                             | 为组件自定义元素类型                                                          |

## Types

### FileType

```js
type FileType = {
  name: string,
  fileKey: number | string,
  status?: 'inited' | 'uploading' | 'error' | 'finished',
  progress?: number,
  url?: string
};
```

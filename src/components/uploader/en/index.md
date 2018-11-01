# Uploader

* `<Uploader>`

## Usage

```js
import { Uploader } from 'rsuite';
```

## Examples

<!--{demo}-->

## Props

### `<Uploader>`

| Property             | Type `(Default)`                                                           | Description                                                                                                                                       |
| -------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| action \*            | string                                                                     | Uploading URL                                                                                                                                     |
| accept               | string                                                                     | File types that can be accepted. See input accept Attribute                                                                                       |
| autoUpload           | boolean `(true)`                                                           | Automatically upload files after selecting them                                                                                                   |
| classPrefix          | string `('uploader')`                                                      | The prefix of the component CSS class                                                                                                             |
| fileList             | Array<FileType>                                                            | List of uploaded files （Controlled）                                                                                                             |
| defaultFileList      | Array<FileType>                                                            | List of uploaded files                                                                                                                            |
| data                 | Object                                                                     | Upload the parameters with                                                                                                                        |
| disabled             | boolean                                                                    | Disabled upload button                                                                                                                            |
| disabledFileItem     | boolean                                                                    | Disable the file list                                                                                                                             |
| multiple             | boolean                                                                    | Allow multiple file uploads to be selected at a time                                                                                              |
| name                 | string `('file')`                                                          | Upload the parameter name of the corresponding file                                                                                               |
| timeout              | number                                                                     | Set upload timeout                                                                                                                                |
| withCredentials      | boolean                                                                    | Whether to carry cookies when uploading requests                                                                                                  |
| headers              | Object                                                                     | Set Upload request Header                                                                                                                         |
| listType             | menu: 'text' , 'picture-text' , 'picture' `('text')`                       | Upload list Style                                                                                                                                 |
| shouldQueueUpdate    | (fileList: Array<FileType>, newFile: Array<FileType>, FileType) => boolean | Allow the queue to be updated. After you select a file, update the checksum function before the upload file queue, and return false to not update |
| shouldUpload         | (file: FileType) => boolean                                                | Allow uploading of files. Check function before file upload, return false without uploading                                                       |
| onChange             | (fileList: Array<FileType>) => void                                        | callback function that the upload queue has changed                                                                                               |
| onUpload             | (file: FileType) => void                                                   | The callback function that starts the upload file                                                                                                 |
| onError              | (reason: Object, file: FileType) => void                                   | Upload callback function with error                                                                                                               |
| onSuccess            | (response: Object, file: FileType) => void                                 | callback function after successful upload                                                                                                         |
| onProgress           | (percent: number, file: FileType) => void                                  | Callback functions that upload progress changes                                                                                                   |
| onPreview            | (file: FileType, event: SyntheticEvent&lt;any&gt;) => void                 | In the file list, click the callback function for the uploaded file                                                                               |
| onRemove             | (file: FileType) => void                                                   | In the file list, click the callback function to delete a file                                                                                    |
| onReupload           | (file: FileType) => void                                                   | In the file list, for uploading failed files, click the callback function to upload                                                               |
| toggleComponentClass | React.ElementType `('button')`                                             | You can use a custom element for this component                                                                                                   |
| maxPreviewFileSize   | number `(5242880)`                                                         | Set the maximum limit for preview files                                                                                                           |

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

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
| accept               | string                                                                     | File types that can be accepted. See input accept Attribute                                                                                       |
| action \*            | string                                                                     | Uploading URL                                                                                                                                     |
| autoUpload           | boolean `(true)`                                                           | Automatically upload files after selecting them                                                                                                   |
| classPrefix          | string `('uploader')`                                                      | The prefix of the component CSS class                                                                                                             |
| data                 | Object                                                                     | Upload the parameters with                                                                                                                        |
| defaultFileList      | Array<FileType>                                                            | List of uploaded files                                                                                                                            |
| disabled             | boolean                                                                    | Disabled upload button                                                                                                                            |
| disabledFileItem     | boolean                                                                    | Disable the file list                                                                                                                             |
| fileList             | Array<FileType>                                                            | List of uploaded files （Controlled）                                                                                                             |
| headers              | Object                                                                     | Set Upload request Header                                                                                                                         |
| listType             | menu: 'text' , 'picture-text' , 'picture' `('text')`                       | Upload list Style                                                                                                                                 |
| maxPreviewFileSize   | number `(5242880)`                                                         | Set the maximum limit for preview files                                                                                                           |
| multiple             | boolean                                                                    | Allow multiple file uploads to be selected at a time                                                                                              |
| name                 | string `('file')`                                                          | Upload the parameter name of the corresponding file                                                                                               |
| onChange             | (fileList: Array<FileType>) => void                                        | callback function that the upload queue has changed                                                                                               |
| onError              | (reason: Object, file: FileType) => void                                   | Upload callback function with error                                                                                                               |
| onPreview            | (file: FileType, event: SyntheticEvent&lt;any&gt;) => void                 | In the file list, click the callback function for the uploaded file                                                                               |
| onProgress           | (percent: number, file: FileType) => void                                  | Callback functions that upload progress changes                                                                                                   |
| onRemove             | (file: FileType) => void                                                   | In the file list, click the callback function to delete a file                                                                                    |
| onReupload           | (file: FileType) => void                                                   | In the file list, for uploading failed files, click the callback function to upload                                                               |
| onSuccess            | (response: Object, file: FileType) => void                                 | callback function after successful upload                                                                                                         |
| onUpload             | (file: FileType) => void                                                   | The callback function that starts the upload file                                                                                                 |
| shouldQueueUpdate    | (fileList: Array<FileType>, newFile: Array<FileType>, FileType) => boolean | Allow the queue to be updated. After you select a file, update the checksum function before the upload file queue, and return false to not update |
| shouldUpload         | (file: FileType) => boolean                                                | Allow uploading of files. Check function before file upload, return false without uploading                                                       |
| timeout              | number                                                                     | Set upload timeout                                                                                                                                |
| toggleComponentClass | React.ElementType `('button')`                                             | You can use a custom element for this component                                                                                                   |
| withCredentials      | boolean                                                                    | Whether to carry cookies when uploading requests                                                                                                  |

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

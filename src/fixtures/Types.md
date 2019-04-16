#### Placement

```ts
type Placement4 = 'top' | 'bottom' | 'right' | 'left';
type Placement8 =
  | 'bottomStart'
  | 'bottomEnd'
  | 'topStart'
  | 'topEnd'
  | 'leftStart'
  | 'leftEnd'
  | 'rightStart'
  | 'rightEnd';
type PlacementAuto =
  | 'auto'
  | 'autoVerticalStart'
  | 'autoVerticalEnd'
  | 'autoHorizontalStart'
  | 'autoHorizontalEnd';

type Placement = Placement8 | PlacementAuto;
type PlacementAll = Placement4 | Placement8 | PlacementAuto;
type PlacementStart = 'bottomStart' | 'topStart' | 'autoVerticalStart';
```

#### DataItemType

```ts
type DataItemType = {
  value: string;
  label: React.Node;
  children?: Array<DataItemType>;
  groupBy?: string;
};
```

#### Range

```js
type Range = {
  label: React.Node,
  closeOverlay?: boolean,
  value: Date | ((date: Date) => Date)
};
```

#### Trigger

```js
type Trigger =
  | 'click'
  | 'hover'
  | 'contextMenu'
  | Array<'click' | 'hover' | 'contextMenu'>;
```

#### FileType

```js
type FileType = {
  name: string,
  fileKey: number | string,
  status?: 'inited' | 'uploading' | 'error' | 'finished',
  progress?: number,
  url?: string
};
```

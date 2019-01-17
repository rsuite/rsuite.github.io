#### Placement

```ts
type Placement4 = 'top' | 'bottom' | 'right' | 'left';
type Placement8 =
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'
  | 'leftTop'
  | 'rightTop'
  | 'leftBottom'
  | 'rightBottom';
type PlacementAuto =
  | 'auto'
  | 'autoVerticalLeft'
  | 'autoVerticalRight'
  | 'autoHorizontalTop'
  | 'autoHorizontalBottom';

type PlacementLeft = 'bottomLeft' | 'topLeft' | 'autoVerticalLeft';
type Placement = Placement8 | PlacementAuto;
type PlacementAll = Placement4 | Placement8 | PlacementAuto;
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

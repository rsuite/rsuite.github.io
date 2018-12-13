### 自定义选项

<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite.github.io/blob/master/src/resources/data/province-simplified.js
 */

const instance = (
  <MultiCascader
    data={data}
    block
    renderMenuItem={(label, item) => {
      return (
        <div>
          <i className="rs-icon rs-icon-circle" /> {label}
        </div>
      );
    }}
    placeholder={
      <span>
        <i className="rs-icon rs-icon-map-marker" /> 地区
      </span>
    }
    renderValue={(value, selectedItems, selectedElement) => (
      <span>
        <span style={{ color: '#575757' }}>
          <i className="rs-icon rs-icon-map-marker" /> 地区 :
        </span>{' '}
        {selectedItems.map(item => item.label).join(' , ')}
      </span>
    )}
  />
);
```

<!--end-code-->

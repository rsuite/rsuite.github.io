### 默认

<!--start-code-->

```js
function getTodoList(date) {
  const day = dateFns.getDate(date);

  switch (day) {
    case 10:
      return [
        { time: '10:30 am', title: 'Meeting' },
        { time: '12:00 pm', title: 'Lunch' },
        { time: '02:00 pm', title: 'Developing' },
        { time: '05:00 pm', title: 'Meeting' }
      ];
    case 15:
      return [
        { time: '09:30 pm', title: 'Products Introduction Meeting' },
        { time: '12:30 pm', title: 'Client entertaining' }
      ];
    default:
      return [];
  }
}

function renderCell(date) {
  const list = getTodoList(date);

  if (list.length) {
    return (
      <div>
        {list.map((item, index) => (
          <Tag key={index}>
            <a target="_blank">
              <b>{item.time}</b> - {item.title}{' '}
            </a>
          </Tag>
        ))}
      </div>
    );
  }

  return null;
}

const instance = <Calendar bordered renderCell={renderCell} />;
ReactDOM.render(instance);
```

<!--end-code-->

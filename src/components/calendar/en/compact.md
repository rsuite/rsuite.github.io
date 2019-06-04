### Compact

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
        <a>●</a>
      </div>
    );
  }

  return null;
}

const instance = (
  <div style={{ width: 280 }}>
    <Calendar compact bordered renderCell={renderCell} />{' '}
  </div>
);
ReactDOM.render(instance);
```

<!--end-code-->

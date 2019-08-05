### Sortable

<!--start-code-->
```js
class ListDemo extends React.Component{
  constructor() {
    super();
    this.state = {
      data:[
        {text:'Roses are red',},
        {text:'Violets are blue',},
        {text:'Sugar is sweet',},
        {text:'And so are you'},
        {text:'( You can\'t catch me ~ )',disabled:true},
      ],
    };
    this.handleSortEnd = this.handleSortEnd.bind(this);
  }
  
  handleSortEnd({oldIndex, newIndex}){
    this.setState(({data})=>{
      const moveData=data.splice(oldIndex,1);
      const newData=[...data];
      newData.splice(newIndex,0,moveData[0]);
      return{
       data: newData
      }
    })
  };
  
  render() {
    const { data} = this.state;
    return (
      <div>
        <List 
          sortable 
          onSort={this.handleSortEnd}
        >
        {
          data.map(({text,disabled},index)=>
          <List.Item 
            key={index}
            index={index} 
            disabled={disabled}
          >
            {text}
          </List.Item>
          )
        }
        </List>
      </div>
    );
  }
}
ReactDOM.render(<ListDemo/>);

```
<!--end-code-->

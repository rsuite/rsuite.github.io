### Sortable

<!--start-code-->
```js
const CustomBlock=({children,style,...props})=>
   <div style={{ padding: '1em 2em',display:'inline-block', ...style}}
      {...props}
   >
      {children}
   </div>;
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
      data2: [
       {text:'网页',},
       {text:'图片',},
       {text:'新闻',},
       {text:'视频',},
      ],
      data3: [
       {text:'item1',},
       {text:'item2',},
       {text:'item3',},
       {text:'item4',},
       {text:'item5',},
       {text:'item6',},
       {text:'item7',},
       {text:'item8',},
       {text:'item9',},
      ],
     
    };
    this.handleSortEnd = this.handleSortEnd.bind(this);
    this.handleSortEnd2 = this.handleSortEnd2.bind(this);
    this.handleSortEnd3 = this.handleSortEnd3.bind(this);
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
  handleSortEnd2({oldIndex, newIndex}){
    this.setState(({data2})=>{
      const moveData=data2.splice(oldIndex,1);
      const newData=[...data2];
      newData.splice(newIndex,0,moveData[0]);
      return{
       data2: newData
      }
    })
  };
  handleSortEnd3({oldIndex, newIndex}){
    this.setState(({data3})=>{
      const moveData=data3.splice(oldIndex,1);
      const newData=[...data3];
      newData.splice(newIndex,0,moveData[0]);
      return{
       data3: newData
      }
    })
  };
  
  render() {
    const { data, data2, data3} = this.state;
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
        <hr/>
        <List 
          axis='x'
          sortable 
          onSort={this.handleSortEnd2}
        >
        {
          data2.map(({text,disabled},index)=>
          <List.Item 
            key={index}
            index={index} 
            disabled={disabled}
          >
            <CustomBlock>{text}</CustomBlock>
          </List.Item>
          )
        }
        </List>      
        <hr/>
        <h5>Note: Only ListItems of the same size of grid are supported.</h5>
        <List 
          style={{
            width: 300
          }}
          axis='xy'
          sortable 
          onSort={this.handleSortEnd3}
        >
        {
          data3.map(({text,disabled},index)=>
          <List.Item 
            key={index}
            index={index} 
            disabled={disabled}
          >
            <CustomBlock>
              {text}
            </CustomBlock>
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

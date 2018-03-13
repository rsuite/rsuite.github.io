### 动态添加标签

<!--start-code-->

```js
class DynamicTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: false,
      inputValue: '',
      tags: ['Item A', 'Item B', 'Item C']
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputConfirm = this.handleInputConfirm.bind(this);
  }
  handleButtonClick() {
    this.setState(
      {
        typing: true
      },
      () => {
        this.input.focus();
      }
    );
  }
  handleInputChange(inputValue) {
    this.setState({ inputValue });
  }
  handleInputConfirm() {
    const { inputValue, tags } = this.state;
    const nextTags = inputValue ? [...tags, inputValue] : tags;
    this.setState({
      tags: nextTags,
      typing: false,
      inputValue: ''
    });
  }
  handleTagRemove(tag) {
    const { tags } = this.state;
    const nextTags = tags.filter(item => item !== tag);
    this.setState({
      tags: nextTags
    });
  }
  renderInput() {
    const { typing, inputValue } = this.state;

    if (typing) {
      return (
        <Input
          inputRef={ref => {
            this.input = ref;
          }}
          size="xs"
          style={{ width: 70 }}
          value={inputValue}
          onChange={this.handleInputChange}
          onBlur={this.handleInputConfirm}
          onPressEnter={this.handleInputConfirm}
        />
      );
    }

    return (
      <IconButton
        onClick={this.handleButtonClick}
        icon={<Icon icon="plus" />}
        appearance="ghost"
        size="xs"
      />
    );
  }
  render() {
    const { tags } = this.state;
    return (
      <div>
        {tags.map((item, index) => (
          <Tag
            key={index}
            closable
            onClose={() => {
              this.handleTagRemove(item);
            }}
          >
            {item}
          </Tag>
        ))}
        {this.renderInput()}
      </div>
    );
  }
}

ReactDOM.render(<DynamicTag />);
```

<!--end-code-->

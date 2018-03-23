### Event 事件

```typescript
on: (target: HTMLElement, eventName: string, listener: Function, capture: boolean = false) => {off: Function};
off: (target: HTMLElement, eventName: string, listener: Function, capture: boolean = false) => void;
```

<!--start-code-->

```js
class Demo extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button
            ref={ref => {
              this.btn = ref;
            }}
          >
            click me
          </button>
        </div>
        <hr />
        <ButtonToolbar>
          <Button
            onClick={() => {
              this.listener = on(this.btn, 'click', () => {
                alert('click');
              });
            }}
          >
            on
          </Button>

          <Button
            onClick={() => {
              if (this.listener) {
                this.listener.off();
              }
            }}
          >
            off
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

ReactDOM.render(<Demo />);
```

<!--end-code-->

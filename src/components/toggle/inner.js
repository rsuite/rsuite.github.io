var instance = (
  <div>
    <Toggle
      checkedChildren="ON"
      unCheckedChildren="OFF"
    />
    <Toggle
      checkedChildren={<IconFont icon="check" />}
      unCheckedChildren={<IconFont icon="close" />}
    />
  </div>
);
ReactDOM.render(instance, mountNode);

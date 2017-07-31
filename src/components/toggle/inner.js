var instance = (
  <div>
    <Toggle
      size='lg'
      checkedChildren="打开"
      unCheckedChildren="关闭"
    />

    <Toggle
      checkedChildren={<IconFont icon="check"/>}
      unCheckedChildren={<IconFont icon="close"/>}
    />
  </div>
);
ReactDOM.render(instance, mountNode);

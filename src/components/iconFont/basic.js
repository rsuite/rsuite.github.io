var instance = (
    <div className='icon-example-list'>
        <IconFont icon='star' />
        <h5>动态图标</h5>
        <IconFont icon='spinner' spin />
        <IconFont icon='spinner' spin />
        <IconFont icon='cog' pulse />
        <h5>旋转和翻转</h5>
        <IconFont icon='shield' rotate={90} />
        <IconFont icon='shield' rotate={180} />
        <IconFont icon='shield' rotate={270} />
        <IconFont icon='shield' flip="horizontal" />
        <IconFont icon='shield' flip="vertical" />
        <h5>放大图标</h5>
        <IconFont icon='camera-retro' size="lg" />
        <IconFont icon='camera-retro' size="2x" />
        <IconFont icon='camera-retro' size="3x" />
        <IconFont icon='camera-retro' size="4x" />
        <IconFont icon='camera-retro' size="5x" />
    </div>
);
ReactDOM.render(instance, mountNode);

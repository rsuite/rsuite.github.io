import React from 'react';

const data = {
  path1: {
    d: 'M231.7,200c0,17.4-1.7,88-31.7,88s-31.7-70.6-31.7-88s1.7-88,31.7-88S231.7,182.6,231.7,200z'
  },
  path2: {
    d: 'M216.1,227.7c-15,8.9-76.6,43.4-91.9,17.6s44.6-63.2,59.6-72.1s76.6-43.4,91.9-17.6S231.1,218.8,216.1,227.7z'
  },
  path3: {
    d: 'M183.9,227.7c15,8.9,76.6,43.4,91.9,17.6s-44.6-63.2-59.6-72.1s-76.6-43.4-91.9-17.6S168.9,218.8,183.9,227.7z'
  }
};


class ReactLogo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      pathFillColor,
      pathStrokeColor,
      pathStrokeWidth,
      bigCircleFillColor,
      bigCircleRadius,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        className="react-logo"
      >
        <svg viewBox="0 0 400 400">
          <path fill={pathFillColor} stroke={pathStrokeColor} strokeWidth={pathStrokeWidth} d={data['path1'].d}></path>
          <path fill={pathFillColor} stroke={pathStrokeColor} strokeWidth={pathStrokeWidth} d={data['path2'].d}></path>
          <path fill={pathFillColor} stroke={pathStrokeColor} strokeWidth={pathStrokeWidth} d={data['path3'].d}></path>
          <circle fill={bigCircleFillColor} cx="200" cy="200" r={bigCircleRadius}></circle>
        </svg>
      </div>
    );
  }
}


ReactLogo.defaultProps = {
  pathStrokeWidth: 4,
  pathFillColor: 'none',
  pathStrokeColor: '#555',
  bigCircleFillColor: '#555',
  bigCircleRadius: 16
};

export default ReactLogo;
import React from 'react';

export default ({ width, height, className = '' }) => {
  const style = {
    width,
    height,
    display: 'inline-block'
  };

  return (
    <div
      style={style}
      className={`rsuite-logo logo-animated logo-animated-delay-half-seconds bounceIn ${className} `}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146 168">
        <title>RSUITE</title>
        <g>
          <g>
            <polygon
              className="cls-2"
              points="144.5 50.57 144.5 41.71 139.03 38.56 81.41 72.19 134.59 131.11 135.39 130.4 144.5 125.14 144.5 58.78 131.89 66.22 131.89 108.5 102.02 75.37 144.5 50.57"
            />
            <polygon
              className="cls-2"
              points="9.99 35.95 9.98 35.95 9.98 35.95 9.98 35.95 0 41.71 0 111.47 12.61 104.04 12.61 58.47 44.44 93.78 0 119.72 0 125.14 8.43 130.01 65.06 96.94 9.99 35.95"
            />
            <polygon
              className="cls-1"
              points="37.16 34.82 118.89 125.37 118.9 125.36 127.56 134.92 72.25 166.85 10.94 131.46 23.48 124.14 72.25 152.29 107.26 132.08 25.53 41.53 25.51 41.55 16.85 31.98 72.25 0 136.52 37.11 123.98 44.43 72.25 14.56 37.16 34.82"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

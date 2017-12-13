import React from 'react';

export default ({ width, height, color = '#575757', className = '' }) => {
  const style = {
    width,
    height,
    display: 'inline-block'
  };

  return (
    <div style={style} className={`svg-icon ${className} `}>
      <svg viewBox="-1 -1 18 14" xmlns="http://www.w3.org/2000/svg" >
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Plug" stroke={color}>
            <rect id="Rectangle-15" x="0.5" y="3.5" width="13" height="8" rx="1"></rect>
            <rect id="Rectangle" x="2.5" y="1.5" width="3" height="2" rx="1"></rect>
            <rect id="Rectangle-Copy" x="8.5" y="1.5" width="3" height="2" rx="1"></rect>
          </g>
        </g>
      </svg>
    </div>
  );
};
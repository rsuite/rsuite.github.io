import React from 'react';
import Placeholder from 'react-placeholder';

const images = {
  default: require('../resources/images/paragraph.png'),
  short: require('../resources/images/short-paragraph.png')
};

export default ({ rows = 4, type = 'text', width = '100%', style, children, ...props }) => (
  <div style={{ width, ...style }} className="paragraph">
    <Placeholder type={type} rows={rows} ready={false} {...props}>
      <span />
    </Placeholder>
    {children}
  </div>
);

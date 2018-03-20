import React from 'react';

const images = {
  default: require('../resources/images/paragraph.png'),
  short: require('../resources/images/short-paragraph.png')
};

export default ({ count = 1, width = '100%', size = 'default', style, children, ...props }) => (
  <div {...props} style={{ width, maxWidth: 600, ...style }} className="paragraph">
    {[...Array(count)].map((item, index) => {
      return (
        <img
          key={index}
          width="100%"
          src={images[size]}
          style={{ marginTop: index > 0 ? 18 : 0 }}
        />
      );
    })}
    {children}
  </div>
);

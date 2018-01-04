import React from 'react';
import short from '../../resources/images/short-paragraph.png';

export default function ({ count = 1, width = '100%', children, ...props }) {
  return (
    <div
      {...props}
      style={{ width, maxWidth: 600 }}
      className="paragraph"
    >
      {
        [...Array(count)].map((item, index) => {
          return <img key={index} width='100%' src={short} style={{ marginTop: 18 }} />;
        })
      }
      {children}
    </div>
  );
}
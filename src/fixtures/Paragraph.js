import React from 'react';
import short from '../../resources/images/short-paragraph.png';

export default function ({ count = 1, children, ...props }) {
  return (
    <div
      {...props}
      className="paragraph"
    >
      {
        [...Array(count)].map((item, index) => {
          return <img key={index} src={short} />;
        })
      }
      {children}
    </div>
  );
}
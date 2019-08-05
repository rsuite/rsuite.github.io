import React from 'react';
import { Placeholder } from 'rsuite';

const { Paragraph } = Placeholder;

export default ({
  rows = 4,
  type = 'text',
  width = '100%',
  style,
  children,
  ...props
}) => (
  <div style={{ width, ...style }} className="paragraph">
    <Paragraph rows={rows} {...props}>
      <p>This is a Test.</p>
    </Paragraph>
    {children}
  </div>
);

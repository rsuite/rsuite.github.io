import React from 'react';
import Paragraph from 'react-paragraph';

export default ({ rows = 4, type = 'text', width = '100%', style, children, ...props }) => (
  <div style={{ width, ...style }} className="paragraph">
    <Paragraph type={type} rows={rows} ready={false} firstLaunchOnly {...props}>
      <p>This is a Test.</p>
    </Paragraph>
    {children}
  </div>
);

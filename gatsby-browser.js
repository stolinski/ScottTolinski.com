import React from 'react';
import VideoBillboard from './src/components/VideoBillboard';

export const wrapPageElement = ({
  element, props, children, location,
}) => (
  <div>
    <>
      <VideoBillboard {...props} />
      {element}
    </>
  </div>
);

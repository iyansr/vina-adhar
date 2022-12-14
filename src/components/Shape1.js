import * as React from 'react';

const Shape1 = ({ fill = '#F06', ...props }) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={fill}
      d="M134.1 35.4c8.3 10.3 12.1 23 8.9 34.2-3.2 11.2-13.4 20.8-14 30.1-.5 9.3 8.7 18.3 6.5 20.2-2.2 1.8-15.6-3.5-23.4-1.8-7.8 1.8-10 10.5-16.6 18.3-6.5 7.7-17.6 14.3-25.5 12.7-7.9-1.7-12.8-11.7-12.1-21.2.6-9.6 6.7-18.7 4.7-29.1-2.1-10.3-12.3-21.9-14.9-34.9C45.1 51 50 36.5 60 27.1c10-9.5 25-13.9 38.9-12 14 1.8 26.9 9.9 35.2 20.3Z"
    />
  </svg>
);

export default Shape1;

import React from 'react';
import wrap, { IconCommonInterface } from './iconWrap';

const IconLinkedin: React.FC<IconCommonInterface> = ({
  size,
  color
}) => (
  <svg width={size} height={size}  fill="none" viewBox={'0 0 22 21'} xmlns="http://www.w3.org/2000/svg">
    <path d="M4.92446 20.9995H0.363393V6.97921H4.92446V20.9995ZM2.64147 5.06671C1.18299 5.06671 0 3.91359 0 2.5214C1.04392e-08 1.85269 0.278297 1.21136 0.77367 0.738502C1.26904 0.265647 1.94091 0 2.64147 0C3.34204 0 4.0139 0.265647 4.50928 0.738502C5.00465 1.21136 5.28295 1.85269 5.28295 2.5214C5.28295 3.91359 4.09946 5.06671 2.64147 5.06671ZM21.9951 20.9995H17.4438V14.1745C17.4438 12.548 17.4095 10.462 15.0725 10.462C12.7011 10.462 12.3377 12.2292 12.3377 14.0573V20.9995H7.78152V6.97921H12.156V8.89171H12.2198C12.8287 7.79015 14.3162 6.62765 16.5354 6.62765C21.1514 6.62765 22 9.52921 22 13.298V20.9995H21.9951Z"
      fill={color}/>
  </svg>
);

export default wrap(IconLinkedin);

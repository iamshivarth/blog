import React from 'react';

import './Button.scss';

const BUTTON_TYPES = {
  google: 'google__signin',
  inverted: 'inverted'
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`button__container ${BUTTON_TYPES[buttonType]}`}
    >
      {children}
    </button>
  );
};

export default Button;

import React from 'react';

import './Input.scss';

const Input = ({ label, ...otherProps }) => {
  return (
    <div className="input__group">
      <input className="input" {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length ? 'shrink' : ''} input__label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;

import React from 'react';

const Alert  = ({message, type, children}) => {
  return (
    <div class={`alert alert-${type}`} role="alert">
      { message ? message : children }
    </div>
  );
};

export default Alert;

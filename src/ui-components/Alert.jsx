import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, type, children, show, toggleAlert }) => {
  return (
    <>
      {show && (
        <div onClick={toggleAlert} className={`alert alert-${type}`} role="alert">
          {message ? message : children}
        </div>
      )}
    </>
  );
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string,
  show: PropTypes.bool,
  toggleAlert: PropTypes.func,
}

Alert.defaultProps = {
  message: null,
  show: true,
  toggleAlert() {}
}

export default Alert;

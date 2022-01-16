import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ type, buttonName, title }) => {
  return (
    <button type={type} name={buttonName} className={s.Button}>
      {title}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  buttonName: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Button;

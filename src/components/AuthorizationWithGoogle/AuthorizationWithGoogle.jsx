import React from 'react';
import PropTypes from 'prop-types';
import s from './AuthorizationWithGoogle.module.css';

const AuthorizationWithGoogle = props => {
  return (
    <div>
      <button type="button" className={s.ButtonGoogleAuth}>
        <span>ICON</span> Google
      </button>
    </div>
  );
};

AuthorizationWithGoogle.propTypes = {};

export default AuthorizationWithGoogle;

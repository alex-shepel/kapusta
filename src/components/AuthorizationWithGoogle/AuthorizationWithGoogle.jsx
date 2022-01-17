import React from 'react';

import s from './AuthorizationWithGoogle.module.css';

const AuthorizationWithGoogle = () => {
  return (
    <div className={s.ButtonWrap}>
      <button type="button" className={s.ButtonGoogleAuth}>
        <span>ICON</span> Google
      </button>
    </div>
  );
};

export default AuthorizationWithGoogle;

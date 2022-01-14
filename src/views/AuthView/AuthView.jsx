import PropTypes from 'prop-types';

import AuthorizationWithGoogle from '../../components/AuthorizationWithGoogle';
import AuthorizationWithEmail from '../../components/AuthorizationWithEmail';
import s from './AuthView.module.css';
const AuthView = props => {
  return (
    <>
      <div>AuthView</div>
      <div className={s.authWrapper}>
        <p className={s.AuthTitle}>
          Вы можете авторизоваться с помощью Google Account:
        </p>
        <AuthorizationWithGoogle />
        <p className={s.AuthTitle}>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
        <AuthorizationWithEmail />
      </div>
    </>
  );
};

AuthView.propTypes = {};

export default AuthView;

import AuthorizationWithGoogle from 'components/AuthorizationWithGoogle';
import AuthorizationWithEmail from 'components/AuthorizationWithEmail';
import s from './AuthView.module.css';
const AuthView = () => {
  return (
    <>
      <div>AuthView</div>
      <div className={s.authWrapper}>
        <p className={s.authWithGoogleTitle}>
          Вы можете авторизоваться с помощью Google Account:
        </p>
        <AuthorizationWithGoogle />
        <p className={s.authWithEmailTitle}>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
        <AuthorizationWithEmail />
      </div>
    </>
  );
};

export default AuthView;

import AuthorizationWithGoogle from 'components/AuthorizationWithGoogle';
import AuthorizationWithEmail from 'components/AuthorizationWithEmail';
import s from './AuthView.module.css';
import { ReactComponent as HeroLogo } from 'images/union.svg';

const AuthView = () => {
  return (
    <>
      {/* <div className={s.WrapMainPage}> */}
      <HeroLogo className={s.HeroLogo} />
      <h1 className={s.HeroTitle}>Smart Finance</h1>
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
      {/* </div> */}
    </>
  );
};

export default AuthView;

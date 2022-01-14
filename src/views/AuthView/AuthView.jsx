import PropTypes from 'prop-types';

import AuthorizationWithGoogle from '../../components/AuthorizationWithGoogle';
import AuthorizationWithEmail from '../../components/AuthorizationWithEmail';

const AuthView = props => {
  return (
    <>
      <div>AuthView</div>
      <p>Вы можете авторизоваться с помощью Google Account:</p>
      <AuthorizationWithGoogle />
      <p>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <AuthorizationWithEmail />
    </>
  );
};

AuthView.propTypes = {};

export default AuthView;

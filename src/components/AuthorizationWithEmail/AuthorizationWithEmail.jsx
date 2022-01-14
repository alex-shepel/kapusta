import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AuthorizationWithEmail = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showEequiredEmailError, setShowEequiredEmailError] = useState(false);
  const [showEequiredPasswordError, setShowEequiredPasswordError] =
    useState(false);

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    let submitter = e.nativeEvent.submitter;
    // console.log(submitter.name);

    if (submitter.name === 'login') {
      console.log(email);
      if (email.length < 1) {
        setShowEequiredEmailError(true);
      } else {
        setEmail('');
        setPassword('');
        console.log(`Логин`);
      }
    }

    if (submitter.name === 'registration') {
      if (password.length < 1) {
        setShowEequiredPasswordError(true);
      } else {
        setEmail('');
        setPassword('');
        console.log(`Регистрация`);
      }
    }
  };

  const canceler = e => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      e.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>{showEequiredEmailError && <span>*</span>}Электронная почта:</p>
        <input
          type="email"
          name="email"
          value={email}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Неверный формат"
          onChange={handleChangeEmail}
          onKeyDown={canceler}
          autoComplete="on"
          required
        />
        {showEequiredEmailError && <p>это обязательное поле</p>}
      </label>
      <label>
        <p>{showEequiredPasswordError && <span>*</span>}Пароль:</p>
        <input
          type="password"
          name="password"
          value={password}
          minLength="7"
          maxLength="12"
          onChange={handleChangePassword}
          onKeyDown={canceler}
          autoComplete="off"
          required
        />
        {showEequiredPasswordError && <p>это обязательное поле</p>}
      </label>
      <div>
        <button type="submit" name="login">
          Войти
        </button>
        <button type="submit" name="registration">
          Регистрация
        </button>
      </div>
    </form>
  );
};

AuthorizationWithEmail.propTypes = {};

export default AuthorizationWithEmail;

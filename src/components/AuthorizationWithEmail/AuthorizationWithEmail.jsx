import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { register, login } from '../../redux/auth/index';
import PropTypes from 'prop-types';

import s from './AuthorizationWithEmail.module.css';

const AuthorizationWithEmail = props => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showEequiredEmailError, setShowEequiredEmailError] = useState(false);
  const [showEequiredPasswordError, setShowEequiredPasswordError] =
    useState(false);

  useEffect(() => {}, []);
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    let submitter = e.nativeEvent.submitter;

    if (submitter.name === 'login') {
      console.log(email);
      if (email.length < 1) {
        setShowEequiredEmailError(true);
      } else {
        dispatch(login({ email, password }));
        setEmail('');
        setPassword('');
        // console.log(`Логин`);
      }
    }

    if (submitter.name === 'registration') {
      if (password.length < 1) {
        setShowEequiredPasswordError(true);
      } else {
        dispatch(register({ email, password }));
        setEmail('');
        setPassword('');
        // console.log(`Регистрация`);
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
        <p className={s.TitleLableName}>
          {showEequiredEmailError && <span>*</span>}Электронная почта:
        </p>
        <input
          className={s.InputEmail}
          type="email"
          name="email"
          value={email}
          placeholder="your@email.com"
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
        <p className={s.TitleLableName}>
          {showEequiredPasswordError && <span>*</span>}Пароль:
        </p>
        <input
          className={s.InputPassword}
          type="password"
          name="password"
          value={password}
          placeholder="Пароль"
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
        <button type="submit" name="login" className={s.ButtonAuth}>
          Войти
        </button>
        <button type="submit" name="registration" className={s.ButtonAuth}>
          Регистрация
        </button>
      </div>
    </form>
  );
};

AuthorizationWithEmail.propTypes = {};

export default AuthorizationWithEmail;

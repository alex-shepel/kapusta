import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { register, login } from 'redux/auth/index';

import Button from 'components/Button';
import s from './AuthorizationWithEmail.module.css';

const AuthorizationWithEmail = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRequiredEmailError, setShowRequiredEmailError] = useState(false);
  const [showRequiredPasswordError, setShowRequiredPasswordError] =
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
      if (email.length < 1) {
        setShowRequiredEmailError(true);
      } else {
        dispatch(login({ email, password }));
        setEmail('');
        setPassword('');
      }
    }

    if (submitter.name === 'registration') {
      if (password.length < 1) {
        setShowRequiredPasswordError(true);
      } else {
        dispatch(register({ email, password }));
        setEmail('');
        setPassword('');
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
          {showRequiredEmailError && (
            <span className={s.TitleLableNameError}>*</span>
          )}
          Электронная почта:
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
        {showRequiredEmailError && (
          <p className={s.TitleLableNameError}>это обязательное поле</p>
        )}
      </label>
      <label>
        <p className={s.TitleLableName}>
          {showRequiredPasswordError && (
            <span className={s.TitleLableNameError}>*</span>
          )}
          Пароль:
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
        {showRequiredPasswordError && (
          <p className={s.TitleLableNameError}>это обязательное поле</p>
        )}
      </label>
      <div className={s.battonWrap}>
        <Button type={'submit'} buttonName={'login'} title={'Войти'} />
        <Button
          type={'submit'}
          buttonName={'registration'}
          title={'Регистрация'}
        />
      </div>
    </form>
  );
};

export default AuthorizationWithEmail;

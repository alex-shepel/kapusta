import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { refresh, getIsLoggedIn, getUser, setTokens } from 'redux/auth';
import './App.module.css';
import Routes from 'routes';
import Container from 'components/Container';
import Header from 'components/Header';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const isEmail = useSelector(state => state?.auth?.email);
  const currentToken = useSelector(state => state?.auth?.accessToken);
  // console.log(isEmail);
  // console.log(currentToken);

  const accessToken = new URLSearchParams(location.search).get('accessToken');
  const refreshToken = new URLSearchParams(location.search).get('refreshToken');
  const sid = new URLSearchParams(location.search).get('sid');

  useEffect(() => {
    if (!currentToken) {
      return;
    }
    dispatch(getUser(currentToken));
  }, [dispatch, currentToken]);

  useEffect(() => {
    if (isLoggedIn && !accessToken) {
      dispatch(refresh());
    }
  }, [isLoggedIn, dispatch, accessToken]);

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    dispatch(setTokens({ accessToken, refreshToken, sid }));
    dispatch(getUser(accessToken));
  }, [accessToken, dispatch, refreshToken, sid]);

  return (
    <>
      <header>
        <Container>
          <Header />
        </Container>
      </header>
      <main className="app">
        <Container>
          <Routes isLoggedIn={isLoggedIn} />
        </Container>
      </main>
    </>
  );
};

export default App;

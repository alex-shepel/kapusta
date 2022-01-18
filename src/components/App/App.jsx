import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  refresh,
  getIsLoggedIn,
  getIsRefreshing,
  getUser,
  setTokens,
} from 'redux/auth';
import './App.module.css';
import Routes from 'routes';
import Container from 'components/Container';
import Header from 'components/Header';
import Spinner from 'components/Spinner';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const currentToken = useSelector(state => state?.auth?.accessToken);

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
          {isRefreshing ? <Spinner /> : <Routes isLoggedIn={isLoggedIn} />}
        </Container>
      </main>
    </>
  );
};

export default App;

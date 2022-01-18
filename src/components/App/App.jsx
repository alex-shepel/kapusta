import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { refresh, getIsLoggedIn, getIsRefreshing } from 'redux/auth';
import './App.module.css';
import Routes from 'routes';
import Container from 'components/Container';
import Header from 'components/Header';
import Spinner from '../Spinner';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(refresh());
    }
  }, [isLoggedIn, dispatch]);

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
